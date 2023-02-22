const app = require('../app');
const { fetchCommentsByArticleId } = require('../models/model');


const getCommentsByArticleId = (req, res, next) => {
    const { article_id } = req.params;
    return fetchCommentsByArticleId(article_id)
    .then(result => {
    res.status(200).send({comments: result})
    })
    .catch((err) => next(err))
}







module.exports = { getCommentsByArticleId  };