const { Router } = require("express")
const { getMoviesController, createMovie } = require("../controllers/moviesController")
const { loggerMiddleware, movieValidMiddleware } = require("../middlewares")

const moviesRouter = Router()

moviesRouter.get("/", getMoviesController)
moviesRouter.post("/", movieValidMiddleware, createMovie)

module.exports = {
    moviesRouter
}