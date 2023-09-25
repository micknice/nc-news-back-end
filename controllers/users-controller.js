const app = require('../app');

const { fetchUsers, fetchUserByUsername, insertNewUser } = require('../models/model');


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

const postNewUser = (req, res, next) => {  
    console.log(req.body, 'req.body @ postNewUser') 

   const { name, email, image } = req.body 
   if(!name || !email || !image) {
       return next({
           status: 400,
           msg: `invalid user details, req.body ${req.body}}`
       })
   } else {
       insertNewUser(name, email, image)
       .then(result => {
           const user = result
           res.status(201).send({user: user})
       }).catch((err) => next(err))
   }
    


}







module.exports = {getUsers, postNewUser}