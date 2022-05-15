import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from functools import partial
import json
import asyncio


class CoinAPIHandler:

    def __init__(self) -> None:
        self.scheduler = AsyncIOScheduler()
        self.session = requests.Session()
        self.latestCache = None
        self.historyCache = None

        with open("secrets.json", "r") as secrets:
            self.apiKey = json.load(secrets)["key"]
        headers = {"Accepts": "application/json", "X-CMC_PRO_API_KEY": f"{self.apiKey}"}

        self.session.headers.update(headers)
        self.url = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"

    async def updateCache(self):
        loop = asyncio.get_event_loop()
        parameters = {'start': '1', 'limit': '5000', 'convert': 'USD'}
        try:
            response = await loop.run_in_executor(
                None, partial(self.session.get, self.url, params=parameters))
            self.latestCache = json.loads(response.text)
            print("Cache updated")
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    def startUpdater(self):
        self.scheduler.add_job(self.updateCache, "interval", seconds=10)
        self.scheduler.start()


async def main():
    cmcHandlerInstance = CoinAPIHandler()
    cmcHandlerInstance.startUpdater()
    await asyncio.sleep(10000)


if __name__ == "__main__":
    asyncio.run(main())
