const express = require("express")

const {renderHome} = require("../controller/home")

const routerHome = express.Router()


routerHome.get("/home", renderHome)


module.exports = {routerHome}
