const app = require('../app');




const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal Server Error'})
}







module.exports = { handleServerErrors}