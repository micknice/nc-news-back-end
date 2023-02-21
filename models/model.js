const db = require('../db/connection');

const fetchTopics = () => {
    return db.query(
        `
        SELECT * FROM topics;
        
        `
    )
    .then(result => result.rows)    
}

const fetchArticles = () => {
    return db.query(
        `
        SELECT articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url, CAST(COUNT(comments.article_id) AS INT) as comment_count
        FROM articles
        LEFT JOIN comments ON articles.article_id = comments.article_id
        GROUP BY articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url
        ORDER BY articles.created_at ASC;

        `
    )
    .then(result => result.rows)
}



module.exports = { fetchTopics, fetchArticles };