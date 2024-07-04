const { app } = require("./src/server")
const { dbConnection } = require("./src/config/db")

dbConnection()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server listen on port 3000")
        })
    })
    .catch((error) => {
        console.error(error)
    })