const app = require('../app');
const { fetchArticles, fetchArticleById } = require('../models/model');
const { handleServerErrors } = require('./error-handling-controller');

const getArticles = (req, res, next) => {
    return fetchArticles()
    .then(result => {
    res.status(200).send({articles: result})
    })
    .catch((err) => {next(err)})
}

const getArticleById = (req, res, next) => {
    const { article_id } = req.params  
    return fetchArticleById(article_id)
    .then(result => {
    res.status(200).send({articles: result}) 
    })
    .catch((err) => {next(err)})
}









module.exports = { getArticles, getArticleById };