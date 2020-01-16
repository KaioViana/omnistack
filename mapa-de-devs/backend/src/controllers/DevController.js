const StoreDev = require('../services/DevService');


module.exports = {
    async store(req, res) {
        response = await StoreDev.storeDev(req.body);
        return res.json(response);
    }
};
 