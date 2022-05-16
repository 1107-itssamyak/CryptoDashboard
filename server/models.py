from typing import Union, List
from pydantic import BaseModel
from datetime import datetime


class UserModel(BaseModel):
    username: str
    password: str


class AuthModel(BaseModel):
    username: str
    token: str


class CurrencyModel(BaseModel):
    currID: str
    amount: int
    persistence: bool


class DashboardModel(BaseModel):
    dashboardID: str
    currencyList: List[CurrencyModel]
    value: Union[float, None] = None
    amount: Union[float, None] = None


class UserMetricsModel(BaseModel):
    dashboardFrequency: dict = {}
    lastUsedDashboard: Union[str, None] = None
    darkModeEnabled: bool = False
    currencyFrequency: dict = {}


class UserProfileModel(BaseModel):
    username: str
    dashboardList: List[DashboardModel] = []
    amount: Union[float, None] = None
    metricData: UserMetricsModel


class UserSessionModel(BaseModel):
    username: str
    created: datetime
    lastAccessed: datetime
