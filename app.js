const express = require('express');
const app = express();
const multer  = require('multer')
const upload = multer()

const { handleServerErrors, handlePSQL400Error, handleCustomErrors } = require('./controllers/error-handling-controller');
const { getApi } = require('./controllers/api-controller');
const { getTopics } = require('./controllers/topics-controller');
const { postArticle, getArticles, getArticleById, patchVotesByArticleId } = require('./controllers/articles-controller');
const { getCommentsByArticleId, postCommentByArticleId, deleteCommentByCommentId, patchCommentByCommentId } = require('./controllers/comments-controller');
const { getUsers, postNewUser } = require('./controllers/users-controller')

const cors = require('cors');
app.use(cors());
app.use(express.json());




app.get('/api', getApi);

app.get('/api/topics', getTopics);
app.get('/api/articles', getArticles);
app.get('/api/articles/:article_id', getArticleById)
app.patch('/api/articles/:article_id', patchVotesByArticleId)
// app.post('/api/articles', postArticle)

app.get('/api/articles/:article_id/comments', getCommentsByArticleId)
app.post('/api/articles/:article_id/comments', postCommentByArticleId)
app.delete('/api/comments/:comment_id', deleteCommentByCommentId)
app.patch('/api/comments/:comment_id', patchCommentByCommentId)

app.get('/api/users', getUsers)
app.get('/api/users/:username', getUsers)
app.post('/api/users', upload.none(), postNewUser)





app.use('/*', (req, res)=> {
res.status(404).send({msg: 'not found'});
})
app.use(handleCustomErrors);
app.use(handlePSQL400Error);
app.use(handleServerErrors);

module.exports = app;