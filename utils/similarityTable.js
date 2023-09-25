const Corpus = require('./Corpus')
const {fetchArticlesForTfIdf} = require('../models/model')


const updateCorpus = () => {
    return fetchArticlesForTfIdf()
    .then(articles => {
        const bodyArr = articles.map(x => x = x.body);
        const idArr = articles.map(x => x = x.article_id);
        const corpus = new Corpus(idArr, bodyArr)
        return corpus
    })
}