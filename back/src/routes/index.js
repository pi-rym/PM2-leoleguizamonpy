const { Router } = require("express")
const { obtenerData, getMoviesData } = require("../controllers/moviesController")
const { moviesRouter } = require("../routes/moviesRouter")

const router = Router()

router.get("/", getMoviesData)
router.use("/movies", moviesRouter)

module.exports = {
    router
}