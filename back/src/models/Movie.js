const mongoose = require("mongoose")

const movieObjectSchema = {
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String
}

const movieSchema = new mongoose.Schema(movieObjectSchema)

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}