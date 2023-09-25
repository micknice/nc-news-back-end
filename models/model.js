const db = require('../db/connection');
const format = require('pg-format')

const defaultImgUrl = "https://images.pexels.com/photos/14174469/pexels-photo-14174469.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1"

const fetchTopics = (topic = '%') => {
    const searchTerm = '%' + topic + '%';
    return db.query(
        `
        SELECT * FROM topics
        WHERE topics.slug LIKE $1;
        
        `,[searchTerm]
    )
    .then(result => {
        const topics = result.rows

        if (topics.length === 0) {
            return Promise.reject({
                status: 404,
                msg: 'topic not found'
            })
        }
        return topics;
    })    
}

const fetchArticles = (topic = '%', sort_by = 'created_at', order = 'desc') => {
    const searchTerm = '%' + topic + '%';
    const orderUpper = order.toUpperCase();
    let sortByValidation = false;
    let orderValidation = false;
    const validSortByArray = ['article_id', 'title', 'topic', 'author', 'created_at', 'votes'];
    if (validSortByArray.includes(`${sort_by}`)){
        sortByValidation = true;
        console.log('1st val')
    }
    if (order === 'desc' || order === 'asc') {
        orderValidation = true;
        console.log('2nd val')
    }
    if (sortByValidation === true && orderValidation === true) {
        console.log('prequery')
        return db.query(
            `
            SELECT articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, 
            articles.votes, articles.article_img_url, articles.similar_article, articles.last_updated_tfidf,
            CAST(COUNT(comments.article_id) AS INT) as comment_count
            FROM articles
            LEFT JOIN comments ON articles.article_id = comments.article_id
            WHERE articles.topic LIKE $1
            GROUP BY articles.author, articles.title, articles.article_id, articles.topic, articles.created_at, articles.votes, articles.article_img_url, articles.similar_article
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
const fetchArticlesForTfIdf = () => {
           
        return db.query(
            `
            SELECT articles.article_id, articles.body, articles.last_updated_tfidf             
            FROM articles   
            `
        )
        .then(result => result.rows)
    
    
}


const fetchArticleById = (article_id) => {
    return db.query(
        `
        SELECT articles.author, articles.title, articles.article_id, articles.body, articles.topic,
        articles.created_at, articles.votes, articles.article_img_url, CAST(COUNT(comments.comment_id)AS INT) AS comment_count,
        articles.similar_article
        FROM articles
        LEFT JOIN comments ON articles.article_id = comments.article_id
        WHERE articles.article_id = $1
        GROUP BY articles.author, articles.title, articles.article_id, articles.body, articles.topic,
        articles.created_at, articles.votes, articles.article_img_url, articles.similar_article
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
    if (typeof username !== 'string' || username === '') {
        return Promise.reject({
            status: 400,
            msg: 'invalid username field'
        })
    }
    return db.query(
        `
        SELECT * FROM users
        WHERE users.username = $1
        `, [username]       
    )
    .then(result => {
        const user = result.rows[0]

        if (!user) {
            
            
            return Promise.reject({
                status: 404,
                msg: 'no user found matching that username'
            })
        }
        return user;
        
    })
}

const insertNewUser = (username, email, avatar_url) => {
    return db.query(
        `
        INSERT INTO users
        (username, name, avatar_url, password)
        VALUES
        ($1, $1, $2, $3)
        RETURNING *

        `, [username, avatar_url, email ]
    )
    .then(result => {
        const user = result.rows[0];       
        if (!user) {
            return Promise.reject({
                status: 404,
                msg: 'no article found'
            })
        }
        return user;
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
const updateVotesByCommentId = (comment_id, inc_votes) => {
    

    return db.query(
        `
        UPDATE comments
        SET votes = votes + $1
        WHERE comment_id = $2
        RETURNING *
        `, [inc_votes, comment_id]
    )
    .then(result => {
        const comment = result.rows[0];

        if(!comment) {
            return Promise.reject({
                status: 404,
                msg: 'no comment found'
            })
        }
        return comment;
    })
}

const fetchUsers = () => {
    
    return db.query(
        `
        SELECT * FROM users
        `
    )
    .then(result => {
        const users = result.rows        
        return users
    })
}

const removeCommentByCommentId = (comment_id) => {
    const regex = /^[0-9]+$/;
    
    if (regex.test(comment_id)) {
        return db.query(
            `
            SELECT FROM comments
            WHERE comments.comment_id =$1
            `, [comment_id]
        )
        .then(result => {
            const comments = result.rows;
            if (comments.length > 0) {
                return db.query(
                    `
                    DELETE FROM comments
                    WHERE comments.comment_id = $1
                    `, [comment_id]
                )
                
            } else {
                return Promise.reject({
                    status: 404,
                    msg: 'no comment found matching that comment_id'
                })
            }
        })
        
        

    } else {
        return Promise.reject({
            status: 400,
            msg: 'invalid comment_id'
        })

    }
    

}

const insertNewArticle = (author, title, body, topic, article_img_url=defaultImgUrl) => {
    return db.query(
        `
        INSERT INTO articles
        (author, title, body, topic, article_img_url)
        VALUES
        ($1, $2, $3, $4, $5)
        RETURNING *

        `, [author, title, body, topic, article_img_url]
    )
    .then(result => {
        const article = result.rows[0];       
        if (!article) {
            return Promise.reject({
                status: 404,
                msg: 'no article found'
            })
        }
        return article;
    })

}







module.exports = { fetchArticlesForTfIdf ,insertNewArticle, updateVotesByCommentId, fetchTopics, fetchArticles, fetchArticleById, 
    fetchCommentsByArticleId, insertCommentByArticleId, updateVotesByArticleId, fetchUsers, removeCommentByCommentId, fetchUserByUsername, 
    insertNewUser  };