const app = require('../app');
const { fetchArticles } = require('../models/model');
const { handleServerErrors } = require('./error-handling-controller');











module.exports = { getArticles };