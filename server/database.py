import models
from typing import Union


class DatabaseInterface:

    def __init__(self) -> None:
        self.database = dict()

    def loadDatabase(self):
        self.database = dict()

    def getUserProfile(self, username: str):
        return models.UserProfileModel.parse_obj(self.database[username])

    def newUserProfile(self, username: str):
        userData = models.UserProfileModel(
            username=username,
            dashboardList=[],
            amount=0,
            metricData=models.UserMetricsModel())
        self.database[username] = userData.dict()

    def updateUserProfile(self, username: str,
                          userData: models.UserProfileModel):
        self.database[username] = userData.dict()

    def newDashboard(self, username: str,
                     dataNew: models.DashboardModel) -> Union[bool, None]:
        userData = self.getUserProfile(username)

        for dashboard in userData.dashboardList:
            if dashboard.dashboardID == dataNew.dashboardID:
                return False

        userData.dashboardList.append(dataNew)

        self.updateUserProfile(username, userData)
        return True

    def fetchDashboard(self, username: str,
                       dashboardID: str) -> Union[models.DashboardModel, None]:
        userData = self.getUserProfile(username)

        query = None
        for dashboard in userData.dashboardList:
            if dashboard.dashboardID == dashboardID:
                query = dashboard
                break

        if query is None:
            return None

        userData.metricData.lastUsedDashboard = query.dashboardID
        userData.metricData.dashboardFrequency[query.dashboardID] += 1

        self.updateUserProfile(username, userData)

        return query
