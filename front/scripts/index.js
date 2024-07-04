const renderCards = require("./renderCards");
const axios = require("axios");
const { formController } = require("./form")

const cardsContainer = document.querySelector("#seriesChild")

if (cardsContainer) {

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movies');
            const data = response.data.data;
            renderCards(data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    fetchData();
} else {
    formController()
}
