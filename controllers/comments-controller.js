const app = require('../app');
const { fetchCommentsByArticleId, insertCommentByArticleId } = require('../models/model');


const getCommentsByArticleId = (req, res, next) => {
    const { article_id } = req.params;
    return fetchCommentsByArticleId(article_id)
    .then(result => {
    res.status(200).send({comments: result})
    })
    .catch((err) => next(err))
}

const postCommentByArticleId = (req, res, next) => {
    const { article_id } = req.params;
    const { body } = req.body;
    return postCommentByArticleId(article_id, body)
    .then(result => {
    res.status(201).send({posted_comment: result})
    })
    .catch((err) => next(err))
}







module.exports = { getCommentsByArticleId, postCommentByArticleId };