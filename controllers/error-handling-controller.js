const app = require('../app');

//will need conditional to be expanded as cases are found, have a feeling i need to implement something further 
//in models? not sure...


const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal Server Error'})
}

// const handlePsqlErrors = (err, req, res, next) => {
//     console.log(err)
//     res.status
// }





module.exports = { handleServerErrors}