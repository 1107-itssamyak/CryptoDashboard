from fastapi import FastAPI, HTTPException, status
from cmcAPI import CoinAPIHandler
from authInterface import AuthenticationHandler
import models

app = FastAPI()
cmcHandlerInstance = CoinAPIHandler()
authHandlerInstance = AuthenticationHandler()


@app.on_event("startup")
async def onStart():
    #cmcHandlerInstance.startUpdater()
    await authHandlerInstance.runDB()


@app.get("/")
async def root():
    pass


@app.post("/register/", status_code=201)
async def reg(creds: models.UserModel):

    response = authHandlerInstance.checkExistingUser(creds.username)
    if response is True:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="user already exists")

    await authHandlerInstance.newUser({"username": creds.username, "password": creds.password})

    return {"response": "success"}


@app.post("/login/", status_code=201)
async def login(creds: models.UserModel):

    response = await authHandlerInstance.authenticateUser({
        "username": creds.username,
        "password": creds.password
    })
    if response is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")
    elif response is False:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="incorrect password")

    return {"response": "success"}


@app.post("/new/", status_code=201)
async def newDashboard():
    pass


@app.get("/dashboard/{dashboard_id}", status_code=201)
async def viewDashboard(dashboard_id: int):
    pass
