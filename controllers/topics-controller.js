const app = require('../app');
const { fetchTopics } = require('../models/model');
const { handleServerErrors } = require('./error-handling-controller');


const getTopics = (req, res, next) => {

    return fetchTopics()
    .then(result => {
    console.log(result)
    res.status(200).send({topics: result})
    })
    .catch(next)
}




module.exports = { getTopics };