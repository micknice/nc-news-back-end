const db = require('../db/connection');
// dont think this is what i need?

const fetchTopics = () => {
    return db.query(
        `
        SELECT * FROM topics;
        
        `
    )
    .then(result => {
        console.log('model',result.rows)
        const topics = result.rows
        if (result.rows.length === 0) {
            return Promise.reject({status: 404, msg: 'resource not found'});

        }
        return topics;
    })   
}


// if (result.rows === 0) {
//     return Promise.reject({status: 404, msg: ''})
// }








module.exports = { fetchTopics };