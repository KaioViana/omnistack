const axios = require('axios');// módulo para fazer chamadas para outras api's
const Dev = require('../models/Dev');// Schema Dev


module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;
        const response = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name=login, avatar_url, bio } = response.data;
        const techsArray = techs.split(',').map(tech => tech.trim());
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        // salvando no banco
        const dev = await Dev.create({
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });
    
        console.log(name, avatar_url, bio);
    
        return res.json(dev);
    }
};
