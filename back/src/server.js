const express = require("express")
const { router } = require("./routes/index")
const cors = require("cors")
const morgan = require("morgan")
const { loggerMiddleware } = require("./middlewares/index")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(loggerMiddleware)

app.use(router)

module.exports = {
    app
}