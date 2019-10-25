//
const axios = require('axios');

const getClima = async( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b7260b0303307acadff141d604f17d9a&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
