import { NextFunction } from "express";

const app = require('../app');
const format = require('pg-format')
const { fetchArticlesForTfIdf,  insertNewArticle, fetchArticles, fetchArticleById, updateVotesByArticleId, fetchTopics } = require('../models/model');
const Corpus = require('../utils/Corpus');



const getArticles = (req: Request, res: Response, next: NextFunction) => {
    const { topic, sort_by, order} = req.query;
       
    return fetchTopics(topic)
    .then(() => {  
        
    return fetchArticles(topic, sort_by, order)
    })
    .then(result => {
    console.log('fetcharticlesreturned')
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

// const postArticle = (req, res, next) => {
//     const {author, title, body, topic, article_img_url} = req.body

//     return insertNewArticle(author, title, body, topic, article_img_url)
//     .then(result => {
//         const{ article_id, author, votes, created_at } = result
//         const comment_count = 0
//         const article = {article_id: article_id, author: author, votes: votes, created_at: created_at, comment_count: comment_count}
//         res.status(201).send({posted_article: article})
//     })
//     .catch((err) => next(err))
// }
// const postArticle = (req, res, next) => {
//     const {author, title, body, topic, article_img_url} = req.body

//     return insertNewArticle(author, title, body, topic, article_img_url)
//     .then(result => {
//         const{ article_id, author, votes, created_at } = result
//         const comment_count = 0
//         const article = {article_id: article_id, author: author, votes: votes, created_at: created_at, comment_count: comment_count}
//         res.status(201).send({posted_article: article})
//     })
//     .then(() => {
//         return fetchArticlesForTfIdf()
//     })
//     .then(articles => {
        
//         const bodyArr = articles.map(article => article = article.body)
//         const idArr = articles.map(article => article = article.article_id)
//         // console.log(bodyArr)
//         // console.log(idArr)
//         const corpus = new Corpus(idArr, bodyArr)
        
//         const simArtArr = bodyArr.map(article => article = corpus.getResultsForQuery(article)[1][0])
//         const idAndSimilarArr = idArr.map((x, i) => [x, simArtArr[i]])
//         return updateSimilarArticlesOnPostNewArticle(idAndSimilarArr) 
//     })
//     .then(() => {

//     })
    
//     .catch((err) => next(err))
// }



module.exports = {  getArticles, getArticleById, patchVotesByArticleId };