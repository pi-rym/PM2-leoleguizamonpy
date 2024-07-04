const axios = require("axios");

function formController() {
    function createdMovie(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const year = document.getElementById('year').value;
        const director = document.getElementById('director').value;
        const duration = document.getElementById('duration').value;
        const genre = document.getElementById('genre').value;
        const rate = document.getElementById('rate').value;
        const poster = document.getElementById('poster').value;

        const camposRequeridosObj = { title, year, director, duration, genre, rate, poster };
        const camposRequeridos = ["title", "year", "director", "duration", "genre", "rate", "poster"];
        const camposFaltantes = camposRequeridos.filter(campo => !camposRequeridosObj[campo]);

        if (camposFaltantes.length > 0) {
            return alert(`Faltan los siguientes campos por llenarse: ${camposFaltantes.join(", ")}`);
        }

        axios.post("http://localhost:3000/movies", camposRequeridosObj)
            .then((response) => {
                if (response.status === 201)
                    alert(response.data.message)
            })
            .catch((error) => {
                console.error(error.response);
            });
    }

    document.querySelector("#buttonClear").addEventListener("click", () => {
        document.querySelector("#movieForm").reset()
    });

    document.querySelector("#submitForm").addEventListener("click", createdMovie);
}


module.exports = {
    formController
}
