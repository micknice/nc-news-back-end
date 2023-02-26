const app = require('../app');
const { fetchArticles, fetchArticleById, updateVotesByArticleId, fetchTopics } = require('../models/model');


const getArticles = (req, res, next) => {
    const { topic, sort_by, order} = req.query;
    return fetchTopics(topic)
    .then(() => {
    return fetchArticles(topic, sort_by, order)

    })
    .then(result => {
    res.status(200).send({articles: result})
    })
    .catch((err) => {next(err)})
}

const getArticleById = (req, res, next) => {
    const { article_id } = req.params  
    return fetchArticleById(article_id)
    .then(result => {
    res.status(200).send({article: result}) 
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