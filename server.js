const express = require("express")
const routerFile = require("./router/file")
const env = require("dotenv").config()

const app = express()



const exphandlebars = require("express-handlebars")
const motor = exphandlebars.engine({ defaultLayout: "main" })
app.engine("handlebars", motor)


app.set("view engine", "handlebars")

app.set("views", "./views")


app.use("/file", routerFile)

const PORT = process.env.PORT || 3001

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
} )