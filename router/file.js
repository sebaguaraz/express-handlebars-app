const express = require("express")
const multer = require("multer")
const path = require("path")

const { renderFormFile, renderSendFile } = require("../controller/file")

const routerFile = express.Router()

const fileFilter = function (request, file, cb) {
    const allowedMimeTypes = ["image/jpeg", "image/png", "application/pdf"]
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error("Tipo de archivo no permitido"), false)
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, Date.now() + "-" + file.originalname.replace(ext, "") + ext )
    }

})

const limits = {
    fileSize: 1024 * 1024 * 5
}

const upload = multer({ limits: limits, storage: storage, fileFilter: fileFilter })



routerFile.get("/", renderFormFile)

routerFile.post("/", upload.single("miArchivo"), renderSendFile)





module.exports = { routerFile }