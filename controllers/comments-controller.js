const app = require('../app');
const {updateVotesByCommentId, fetchCommentsByArticleId, insertCommentByArticleId, fetchArticleById, removeCommentByCommentId } = require('../models/model');
const { getProfanityCheck } = require('../microservices/profanity/profanityApi');


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
    Promise.all([fetchArticleById(article_id)]
    )
    .then(() => {
        return getProfanityCheck(body)
        .then((profanity) => {

            // if(result.containsProfanity === true) {
            //     return Promise.reject({status: 400, msg: 'profanity detected'})
            // } else 
            {
                return insertCommentByArticleId(article_id, username, body)       
                .then(result => {
                res.status(201).send({posted_comment: result, profanity: profanity.containsProfanity})
                })
                .catch((err) => next(err))
            }
        })
    })
}      

    


const deleteCommentByCommentId = (req, res, next) => {
    const { comment_id } = req.params;
    return removeCommentByCommentId(comment_id)
    .then(() => {
    res.status(204).send()
    })
    .catch((err) => next(err))

}

const patchCommentByCommentId = (req, res, next) => {
    const { comment_id } = req.params;
    const { inc_votes } = req.body
    return updateVotesByCommentId(comment_id, inc_votes)
    .then((comment) => {
        res.status(201).send({patched_comment: comment})
    })
}







module.exports = { getCommentsByArticleId, postCommentByArticleId, deleteCommentByCommentId, patchCommentByCommentId };