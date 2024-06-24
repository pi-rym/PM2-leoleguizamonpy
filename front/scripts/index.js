const renderCards = require("./renderCards");

$.get('https://students-api.up.railway.app/movies', function (data) {
    renderCards(data);
}).fail(function () {
    console.error('Error al obtener los datos');
});
