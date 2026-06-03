const express = require("express")
const {renderView, sendFile} = require("../controller/file")

const routerfile = express.Router()


const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }

})

const limits = {
    fileSize: 1024 * 1024 * 5
}

const upload = multer( {limits: limits, storage: storage} )

// * ------------------------------------------------------------


routerfile.get("/", renderView)

routerfile.post("/", upload.single("miArchivo"), sendFile)





module.exports = routerfile