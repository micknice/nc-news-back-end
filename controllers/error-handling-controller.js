const app = require('../app');

//will need conditional to be expanded as cases are found, have a feeling i need to implement something further 
//in models? not sure...
const handle404NotFound = (err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).send({msg: '404 not found'});        
    } else next(err);
}

const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal Server Error'})
}

// const handlePsqlErrors = (err, req, res, next) => {
//     console.log(err)
//     res.status
// }





module.exports = { handleServerErrors, handle404NotFound}