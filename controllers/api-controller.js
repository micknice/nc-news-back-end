const app = require('../app');
const endpoints = require('../endpoints.json');


const getApi = (req, res, next) => {  
    res.status(200).send({endpoints: endpoints})
}


module.exports = { getApi };