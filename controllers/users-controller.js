const app = require('../app');
const { fetchUsers } = require('../models/model');



const getUsers = (req, res, next) => {
    return fetchUsers()
    .then(result => {
    res.status(200).send({users: result})
    })

}

const getUserByUserName = (username) => {
    
}






module.exports = { getUsers }