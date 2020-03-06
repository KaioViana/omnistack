const axios = require('axios');// módulo para fazer chamadas para outras api's
const Dev = require('../models/Dev');// Schema Dev
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections } = require('../websocket');

module.exports = {
    // armazenar um Dev
    async storeDev(body) {
        const { github_username, techs, latitude, longitude } = body;

        const response = await axios.get(`https://api.github.com/users/${github_username}`);
        let dev = await Dev.findOne({ github_username });

        if(!dev){ 
            const { name=login, avatar_url, bio } = response.data;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
            
            // Filtrar as conexões que estão há no máximo 10km de distância
            // e que o novo dev tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray,
            );
            console.log(sendSocketMessageTo);    
        }
        
        return dev;
    },

    // listar/buscar dev
    async indexDev(query) {
        if(query.latitude === undefined & query.longitude == undefined & query.techs == undefined){
            return await Dev.find();
        } else {
            const { latitude, longitude, techs } = query;
            const techsArray = parseStringAsArray(techs);
            return Dev.find({
                techs: {
                    $in: techsArray,
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000,
                    },
                }
            });
            
        }
    },
};
