const { getMoviesService } = require("../services/moviesServices")

function obtenerData(req, res) {
    res.status(200).json({
        message: "todo ok en /",
        data: []
    })
}

function getMoviesController(request, res) {
    const moviesData = getMoviesService()
    res.status(200).json({
        message: "aquí está la información de las movies",
        data: moviesData
    })
}

function createMovie(req, res){
    res.send("Todo ok en create movie")
}

module.exports = {
    obtenerData,
    getMoviesController,
    createMovie
}
