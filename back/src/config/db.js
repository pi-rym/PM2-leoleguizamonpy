require("dotenv").config()
const mongoose = require("mongoose")

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.io5rxoc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

async function dbConnection() {
    await mongoose.connect(URI)
}

module.exports = {
    dbConnection
}