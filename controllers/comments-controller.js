const app = require('../app');
const { fetchCommentsByArticleId, insertCommentByArticleId, fetchArticleById } = require('../models/model');


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
    const { username, body } = req.body;  
    Promise.all([fetchArticleById(article_id) /* put fetchUserByUsername(username) here */]
    )
    .then(() => {       
    return insertCommentByArticleId(article_id, username, body)       
    })   
    .then(result => {
    res.status(201).send({posted_comment: result})
    })
    .catch((err) => next(err))
}








module.exports = { getCommentsByArticleId, postCommentByArticleId };