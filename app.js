const express = require('express');
const app = express();
const { handleServerErrors, handlePSQL400Error, handleCustomErrors } = require('./controllers/error-handling-controller');
const { getApi } = require('./controllers/api-controller');
const { getTopics } = require('./controllers/topics-controller');
const { getArticles, getArticleById } = require('./controllers/articles-controller');
const { getCommentsByArticleId } = require('./controllers/comments-controller');


app.get('/api', getApi);

app.get('/api/topics', getTopics);
app.get('/api/articles', getArticles);
app.get('/api/articles/:article_id', getArticleById)

app.get('/api/articles/:article_id/comments', getCommentsByArticleId)






app.use('/*', (req, res)=> {
res.status(404).send({msg: 'not found'});
})
app.use(handlePSQL400Error);
app.use(handleCustomErrors);
app.use(handleServerErrors);

module.exports = app;