from bcrypt import hashpw, checkpw, gensalt
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import json
import os
from functools import partial
import asyncio


class AuthenticationHandler:

    def __init__(self) -> None:
        self.db = self.loadDB()
        self.scheduler = AsyncIOScheduler()

    @staticmethod
    def enforceUTF8(s) -> bytes:
        if type(s) is bytes:
            pass
        elif type(s) is str:
            s = s.encode("utf8")

        return s

    def loadDB(self) -> dict:
        dbPath = os.path.join("db", "userDB.json")
        dbDict = None
        if os.path.isfile(dbPath):
            with open(dbPath, "r") as database:
                dbDict = json.load(database)
        else:
            dbDict = dict()

        return dbDict

    def updateDB(self, creds: dict) -> None:
        uID = creds["username"]
        pwrd = AuthenticationHandler.enforceUTF8(creds["pwrd"])
        self.db[uID.lower()] = pwrd

    async def saveDB(self) -> None:
        loop = asyncio.get_event_loop()
        dbPath = os.path.join("db", "userDB.json")
        with open(dbPath, "w") as database:
            await loop.run_in_executor(
                None, partial(json.dump, self.db, database, indent=4))
        print("Database saved")

    @staticmethod
    async def encryptString(password: str) -> str:
        loop = asyncio.get_event_loop()
        password = AuthenticationHandler.enforceUTF8(password)
        return await loop.run_in_executor(None,
                                          partial(hashpw, password, gensalt()))

    async def newUser(self, creds: dict) -> None:
        uname = creds["username"]
        pwrd = AuthenticationHandler.enforceUTF8(creds["password"])
        self.db[uname] = await self.encryptString(pwrd)

    def checkExistingUser(self, username: str) -> bool:
        return username in self.db.keys()

    async def authenticateUser(self, creds: dict) -> bool:
        loop = asyncio.get_event_loop()
        uID = creds["username"]
        if self.checkExistingUser(uID) is False:
            return None

        pwrd = AuthenticationHandler.enforceUTF8(creds["password"])
        savedPwrd = self.db[uID]
        return await loop.run_in_executor(None,
                                          partial(checkpw, pwrd, savedPwrd))

    async def runDB(self) -> None:
        self.scheduler.add_job(self.saveDB, "interval", seconds=1200)
        self.scheduler.start()
