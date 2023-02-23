const app = require('../app');
const { fetchArticles, fetchArticleById, updateVotesByArticleId } = require('../models/model');
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
const patchVotesByArticleId = (req, res, next) => {
    const { article_id } = req.params;
    const { inc_votes } = req.body;
    return updateVotesByArticleId(article_id, inc_votes)
    .then(result => {
    res.status(201).send({patched_article: result})
    })
    .catch((err) => next(err))

}



module.exports = { getArticles, getArticleById, patchVotesByArticleId };