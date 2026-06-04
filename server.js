const express = require("express")
const { routerUser } = require("./router/user")
const { routerHome } = require("./router/home")
const { routerFile } = require("./router/file")

const exphandlebars = require("express-handlebars")

const env = require("dotenv").config()

const app = express()

const handler = express.json()
app.use(handler)
app.use( express.urlencoded({ extended: true }) )

const motor = exphandlebars.engine({ defaultLayout: "main" })
app.engine("handlebars", motor)


app.set("view engine", "handlebars")

app.set("views", "./views")


app.use("/api/users", routerUser)
app.use("/api", routerHome)
app.use("/api/uploads", routerFile)

const PORT = process.env.PORT || 3001

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
} )