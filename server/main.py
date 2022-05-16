from fastapi import FastAPI, HTTPException, status
from cmcAPI import CoinAPIHandler
from authInterface import AuthenticationHandler
import models
from userHandler import UserHandler
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()
cmcHandlerInstance = CoinAPIHandler()
authHandlerInstance = AuthenticationHandler()
userHandlerInstance = UserHandler()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8001",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def onStart():
    await cmcHandlerInstance.updateCache()
    cmcHandlerInstance.startUpdater()
    await authHandlerInstance.runDB()


@app.get("/home/{token}",
         status_code=201,
         response_model=models.UserProfileModel)
async def root(token: str):
    check = userHandlerInstance.checkIfSession(token)
    if check is False:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="session already expired")

    username = userHandlerInstance.fetchUserSession(token)

    response = userHandlerInstance.database.getUserProfile(username)
    CoinAPIHandler.updateProfile(response)

    return response


@app.post("/register/", status_code=201)
async def reg(creds: models.UserModel):

    response = authHandlerInstance.checkExistingUser(creds.username)
    if response is True:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                            detail="user already exists")

    await authHandlerInstance.newUser({
        "username": creds.username,
        "password": creds.password
    })
    userHandlerInstance.database.newUserProfile(creds.username)

    return {"response": "success"}


@app.post("/login/", status_code=201)
async def login(creds: models.UserModel):

    response = await authHandlerInstance.authenticateUser({
        "username":
        creds.username,
        "password":
        creds.password
    })
    if response is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="user not found")
    elif response is False:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="incorrect password")

    token = userHandlerInstance.newUserSession(creds.username)

    return {"response": "success", "token": token}


@app.post("/logout/{token}", status_code=201)
async def logout(token: str):
    check = userHandlerInstance.checkIfSession(token)
    if check is False:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="session already expired")

    userHandlerInstance.deleteUserSession(token)

    return {"response": "success"}


@app.put("/new/{token}", status_code=201)
async def newDashboard(token: str, dashboard: models.DashboardModel):
    check = userHandlerInstance.checkIfSession(token)
    if check is False:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="session already expired")

    verificationStatus = CoinAPIHandler.verifyDashboard(dashboard)
    if verificationStatus is False:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail="unknown currency in dashboard")

    username = userHandlerInstance.fetchUserSession(token)

    response = userHandlerInstance.database.newDashboard(username, dashboard)

    if response is False:
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE,
                            detail="dashboard with this ID already exists")
    elif response is True:
        return {"response": "success"}

    raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                        detail="unknown error")


@app.get("/dashboards/{token}/{dashboardID}",
         status_code=201,
         response_model=models.DashboardModel)
async def viewDashboard(token: str, dashboardID: str):
    check = userHandlerInstance.checkIfSession(token)
    if check is False:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="session already expired")

    username = userHandlerInstance.fetchUserSession(token)

    response = userHandlerInstance.database.fetchDashboard(
        username, dashboardID.lower())
    if response is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="dashboard id invalid")

    return response
