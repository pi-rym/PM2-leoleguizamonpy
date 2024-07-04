const { Movie } = require("../models/Movie")

async function getMoviesService() {
    try {
        return await Movie.find()
    } catch (error) {
        throw error
    }
}

async function createdMovieService(movieObject){
    try {
        return await Movie.create(movieObject)

    } catch (error) {
        throw error
    }
}

module.exports = {
    getMoviesService,
    createdMovieService
}