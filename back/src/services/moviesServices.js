const { Movie } = require("../models/Movie")

async function getMoviesService() {
    try {
        return await Movie.find()
    } catch (error) {
        throw error
    }
}

module.exports = {
    getMoviesService
}