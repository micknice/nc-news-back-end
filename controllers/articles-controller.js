const app = require('../app');
const { fetchArticles } = require('../models/model');
const { handleServerErrors } = require('./error-handling-controller');

const getArticles = (req, res, next) => {
    return fetchArticles()
    .then(result => {
    console.log(result)
    res.status(200).send({articles: result})
    })
    .catch(next)

}

module.exports = { getArticles };









module.exports = { getArticles };