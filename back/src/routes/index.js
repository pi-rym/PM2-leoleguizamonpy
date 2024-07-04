const { Router } = require("express")
const { obtenerData, getMoviesData } = require("../controllers/moviesController")
const { moviesRouter } = require("./moviesRouter")

const router = Router()

router.get("/", obtenerData)

router.get("/params/:id", (req, res) => {
    res.status(200).json({
        message: "aquí están los params",
        data: req.params
    })
})

router.get("/query", (req, res) => {
    res.status(200).json({
        message: "aquí están los querys",
        data: req.query
    })
})

router.get("/body", (req, res) => {
    res.status(200).json({
        message: "aquí está el body",
        data: req.body
    })
})

router.use("/movies", moviesRouter)

module.exports = {
    router
}