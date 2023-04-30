const app = require('../app');

const { fetchUsers, fetchUserByUsername } = require('../models/model');


const getUsers = (req, res, next) => {
    
    if (req.params.username) {        
        const { username } = req.params
        fetchUserByUsername(username)
        .then(result=> {
            const user = result
            res.status(200).send({user: user})
        }).catch((err) => next(err))
                
    } else {        
        return fetchUsers()
            .then(result => {
            res.status(200).send({users: result})
            })
            .catch((err) => next(err))       
    }
}

// const getUserByUserName = (req, res, next) => {
//     console.log('controller invoked')
//     const { username } = req.body;
    
//     return fetchUserByUsername(username)
//     .then(result => {
//     // res.status(200).send({user: result})
//     res.status(200).send({user: result})
//     })
//     .catch((err) => next(err))
    
// }


module.exports = {getUsers}