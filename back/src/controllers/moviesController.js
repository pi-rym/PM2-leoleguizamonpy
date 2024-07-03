function obtenerData(req, res){
    res.status(200).json({
        message: "todo ok en /",
        data: []
    })
}

function getMoviesData(req, res) {
    res.status(200).json({
        message: "aquí está la información de las movies",
        data: []
    })
}

module.exports = {
    obtenerData,
    getMoviesData
}
