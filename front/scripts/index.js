const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async () => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        const data = response.data;
        renderCards(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

fetchData();
