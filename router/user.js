const express = require("express")
const multer = require("multer")


const {renderUsers, renderUserCreate, renderUserByID} = require("../controller/user")

const routerUser = express.Router()


routerUser.get("/", renderUsers)
routerUser.post("/", renderUserCreate)

routerUser.get("/:id", renderUserByID)

module.exports = { routerUser }