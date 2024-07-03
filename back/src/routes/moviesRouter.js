const { Router } = require("express")
const { getMoviesData } = require("../controllers/moviesController")

const moviesRouter = Router()

moviesRouter.get("/", getMoviesData)

module.exports = {
    moviesRouter
}