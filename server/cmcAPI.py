import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from functools import partial
import json
import asyncio
import models


class CoinAPIHandler:

    def __init__(self) -> None:
        self.scheduler = AsyncIOScheduler()
        self.session = requests.Session()
        self.listings = None
        self.currencyMap = dict()

        with open("secrets.json", "r") as secrets:
            self.apiKey = json.load(secrets)["key"]
        headers = {
            "Accepts": "application/json",
            "X-CMC_PRO_API_KEY": f"{self.apiKey}"
        }

        self.session.headers.update(headers)
        self.url = " https://pro-api.coinmarketcap.com/v1/cryptocurrency/"

    async def updateCache(self):
        print("Cache update started")
        loop = asyncio.get_event_loop()
        try:
            response = await loop.run_in_executor(
                None,
                partial(self.session.get,
                        "".join([self.url, "listings/latest"])))
            self.listings = json.loads(response.text)
            print("Data fetched")
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

        currencyList = self.listings["data"]

        print("Generating currency map")

        for currency in currencyList:
            self.currencyMap[currency["symbol"]] = {
                "name": currency["name"],
                "quote": currency["quote"]["USD"]["price"]
            }
        print("Cache updated")

    def verifyDashboard(self, dashboard: models.DashboardModel) -> bool:
        for currency in dashboard.currencyList:
            if currency.currID not in self.currencyMap.keys():
                return False

        return True

    def updateProfile(self, userData: models.UserProfileModel) -> None:

        if userData.amount is None:
            userData.amount = 0

        totalAmnt = 0.0

        for dashboard in userData.dashboardList:
            dbVal = 0.0
            dbAmnt = 0.0
            for currency in dashboard.currencyList:
                value = self.currencyMap[
                    currency.currID]["quote"] * currency.amount
                if currency.persistence is False:
                    dbAmnt += value
                dbVal += value
            dashboard.value = dbVal
            dashboard.amount = dbAmnt
            totalAmnt += dashboard.amount

        userData.amount = totalAmnt

    def startUpdater(self):
        self.scheduler.add_job(self.updateCache, "interval", seconds=1200)
        self.scheduler.start()
