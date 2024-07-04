const { getMoviesService, createdMovieService } = require("../services/moviesServices")

function obtenerData(req, res) {
    res.status(200).json({
        message: "todo ok en /",
        data: []
    })
}

async function getMoviesController(request, res) {
    try {
        const moviesData = await getMoviesService()
        res.status(200).json({
            message: "aquí está la información de las movies",
            data: moviesData
        })
    } catch (error) {
        res.status(400).json({
            message: "Hubo un error en la aplicación",
            data: error.message
        })
    }
}

async function createMovie(req, res) {
    try {
        const response = await createdMovieService(req.body)
        res.status(201).json({
            message: "Se hizo los cambios correctamente",
            data: response
        })
    } catch (error) {
        res.status(201).json({
            message: "Hubo un error en la aplicación",
            data: error.message
        })
    }
}

module.exports = {
    obtenerData,
    getMoviesController,
    createMovie
}
