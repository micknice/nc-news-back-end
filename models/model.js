const db = require('../db/connection');

const fetchTopics = () => {
    return db.query(
        `
        SELECT * FROM topics;
        
        `
    )
    .then(result => result.rows)    
}

const fetchArticles = (topic = '%', sort_by = 'created_at', order = 'desc') => {
    const searchTerm = '%' + topic + '%';
    const orderUpper = order.toUpperCase();

    let sortByValidation = false;
    let orderValidation = false;
    const validSortByArray = ['article_id', 'title', 'topic', 'author', 'created_at', 'votes'];
    if (validSortByArray.includes(`${sort_by}`)){
        sortByValidation = true;
    }
    if (order === 'desc' || order === 'asc') {
        orderValidation = true;
    }
    if (sortByValidation === true && orderValidation === true) {
        return db.query(
            `
            SELECT articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url, 
            CAST(COUNT(comments.article_id) AS INT) as comment_count
            FROM articles
            LEFT JOIN comments ON articles.article_id = comments.article_id
            WHERE articles.topic LIKE $1
            GROUP BY articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url
            ORDER BY articles.${sort_by} ${orderUpper};
    
            `, [searchTerm]
        )
        .then(result => result.rows)
    } else if (sortByValidation === false && orderValidation === false){
        return Promise.reject({
            status: 400,
            msg: 'invalid sort_by and order fields'
        })
        
    } else if (sortByValidation === false) {
        return Promise.reject({
            status: 400,
            msg: 'invalid sort_by field'
        })
    } else {
        return Promise.reject({
            status: 400,
            msg: 'invalid order field'
        })
    }
    
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
        SELECT comments.comment_id, comments.votes, comments.created_at, comments.author, comments.body, comments.article_id
        FROM comments
        WHERE comments.article_id = $1
        ORDER BY comments.created_at DESC
        `, [article_id]
    )
    .then(result => {
        const comments = result.rows;
        if (comments.length === 0) {
            return Promise.reject({
                status: 404,
                msg: 'no comments found'
            })
        }
        return comments;
    })
}

const fetchUserByUsername = (username) => {
    return db.query(
        `
        SELECT * FROM users
        WHERE users.username = $1
        `, [username]       
    )
    .then(result => {
        const user = result.rows[0]
        
    })
}

const insertCommentByArticleId = (article_id, username, body) => {
    return db.query(
        `
        INSERT INTO comments
        (body, votes, author, article_id, created_at )
        VALUES
        ($1, $2, $3, $4, NOW())
        RETURNING *

        `, [body, 0, username, article_id ]
    )
    .then(result => {
        const comment = result.rows[0];       
        if (!comment) {
            return Promise.reject({
                status: 404,
                msg: 'no article found'
            })
        }
        return comment;
    })
}

const updateVotesByArticleId = (article_id, inc_votes) => {

    return db.query(
        `
        UPDATE articles
        SET votes = votes + $1
        WHERE article_id = $2
        RETURNING *
        `, [inc_votes, article_id]
    )
    .then(result => {
        const article = result.rows[0];

        if(!article) {
            return Promise.reject({
                status: 404,
                msg: 'no article found'
            })
        }
        return article;
    })
}

const fetchUsers = () => {
    return db.query(
        `
        SELECT * FROM users
        `
    )
    .then(result => result.rows)
}





module.exports = { fetchTopics, fetchArticles, fetchArticleById, 
    fetchCommentsByArticleId, insertCommentByArticleId, updateVotesByArticleId, fetchUsers  };