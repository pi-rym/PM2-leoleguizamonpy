const { getMoviesService } = require("../services/moviesServices")

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
            data: error
        })
    }
}

function createMovie(req, res) {
    res.send("Todo ok en create movie")
}

module.exports = {
    obtenerData,
    getMoviesController,
    createMovie
}
