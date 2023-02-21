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
        ORDER BY articles.created_at DESC;

        `
    )
    .then(result => result.rows)
}


const fetchArticleById = (article_id) => {
    return db.query(
        `
        SELECT articles.author, articles.title, articles.article_id, articles.body, articles.topic, articles.created_at, articles.votes, articles.article_img_url
        FROM articles
        WHERE articles.article_id = $1
        `, [article_id]
    )
    .then(result => {
        const article = result.rows[0];
        if (!article) {
            return Promise.reject({
                status: 404,
                msg: 'no article found'
            });
        }
        return article;
    })

}

const fetchCommentsByArticleId = (article_id) => {
    return db.query(
        `
        SELECT
        `, [article_id]
    )

}



module.exports = { fetchTopics, fetchArticles, fetchArticleById, fetchCommentsByArticleId };