const renderFilms = require("./renderFilms")

$.get('https://students-api.2.us-1.fl0.io/movies',(data)=> data.forEach(renderFilms))
