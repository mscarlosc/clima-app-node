//
const axios = require('axios');

const getLugarLatLng = async( direccion ) => {

    const encodeUri = encodeURI( direccion );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUri }`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '86be250c1cmsh106c2ad51067f99p1213fajsnc6e43dcd3b51'}
      });
    
    const resp = await instance.get();

    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const data   = resp.data.Results[0];
    const ciudad = data.name;
    const lat    = data.lat;
    const lng    = data.lon;

    return {
        ciudad,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}   
