const DevService = require('../services/DevService');


module.exports = {
    async store(req, res) {
        response = await DevService.storeDev(req.body);
        return res.json(response);
    },

    async index(req, res) {
        response = await DevService.indexDev(req.query);
        return res.json(response);
    }
};
 