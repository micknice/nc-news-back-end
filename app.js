const express = require('express');
const app = express();

const { handleServerErrors, handlePSQL400Error, handleCustomErrors } = require('./controllers/error-handling-controller');
const { getApi } = require('./controllers/api-controller');
const { getTopics } = require('./controllers/topics-controller');
const { getArticles, getArticleById, patchVotesByArticleId } = require('./controllers/articles-controller');
const { getCommentsByArticleId, postCommentByArticleId } = require('./controllers/comments-controller');
const { getUsers } = require('./controllers/users-controller')
app.use(express.json())

app.get('/api', getApi);

app.get('/api/topics', getTopics);
app.get('/api/articles', getArticles);
app.get('/api/articles/:article_id', getArticleById)
app.patch('/api/articles/:article_id', patchVotesByArticleId)

app.get('/api/articles/:article_id/comments', getCommentsByArticleId)
app.post('/api/articles/:article_id/comments', postCommentByArticleId)

app.get('/api/users', getUsers)





app.use('/*', (req, res)=> {
res.status(404).send({msg: 'not found'});
})
app.use(handleCustomErrors);
app.use(handlePSQL400Error);
app.use(handleServerErrors);

module.exports = app;