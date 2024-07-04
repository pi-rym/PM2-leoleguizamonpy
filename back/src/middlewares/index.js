function loggerMiddleware(err, req, res, next) {
    console.log(`Se hizo una solicitud a ${req.path}`)
    next()
}

function movieValidMiddleware(req, res, next) {
    const { title, director, genre } = req.body
    if (!title) {
        return res.status(401).json({
            message: "El Título de la película no se cargó"
        })
    } else if (!director) {
         return res.status(401).json({
            message: "El Director de la película no se cargó"
        })
    } else if (!genre) {
        return res.status(401).json({
            message: "El Género de la película no se cargó"
        })
    }

    next()
}

module.exports = {
    loggerMiddleware,
    movieValidMiddleware
}