const axios = require("axios")

const renderFilms = require("./renderFilms")

//const getFilms = () => {
//    axios.get('https://students-api.up.railway.app/movies')
//    .then(({data})=> data.forEach(renderFilms))
//   .catch((error)=> console.log(error.message))
//}

const getFilms = async ()=> {
    try {
        const {data} = await axios.get('https://students-api.up.railway.app/movies')
        console.log(data);
        data.forEach(renderFilms)
    } catch (error) {
        console.log(error)
    }

}

module.exports = getFilms