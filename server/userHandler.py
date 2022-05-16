from datetime import datetime
import models
from database import DatabaseInterface
import asyncio
from secrets import token_urlsafe

# TODO: Add a second layer of pruning that keeps tracked of users that are logged in


class UserHandler:

    def __init__(self) -> None:
        self.sessions = dict()
        self.database = DatabaseInterface()

    def checkIfSession(self, token: str):
        return token in self.sessions.keys()

    def updateUserSession(self, token: str):
        self.sessions[token].lastAccessed = datetime.now()

    def deleteUserSession(self, token: str):
        self.sessions.pop(token)

    def newUserSession(self, username: str) -> str:
        token = token_urlsafe(nbytes=32)
        sessionData = models.UserSessionModel(username=username,
                                              created=datetime.now(),
                                              lastAccessed=datetime.now())
        self.sessions[token] = sessionData

        return token

    def overwriteUserSession(self, token: str, username: str):
        pass

    def fetchUserSession(self, token: str):
        return self.sessions[token].username

    async def pruneSessions(self):
        currTime = datetime.now()
        expiredSessions = list()
        for token, sessionData in self.sessions.items():
            elapsedTime = (currTime - sessionData.lastAccessed).total_seconds()
            if (elapsedTime >= 21600):
                expiredSessions.append(token)

        for token in expiredSessions:
            self.deleteUserSession(token)
