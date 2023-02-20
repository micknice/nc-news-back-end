const express = require('express');
const { handleServerErrors, handle404NotFound } = require('./controllers/error-handling-controller');
const app = express();
const { getApi } = require('./controllers/api-controller');
const { getTopics } = require('./controllers/topics-controller')

app.use(express.json());

app.get('/api', getApi);

app.get('/api/topics', getTopics)



app.use(handle404NotFound);
app.use(handleServerErrors);

module.exports = app;