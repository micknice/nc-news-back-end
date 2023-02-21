const app = require('../app');


const handleServerErrors = (err, req, res, next) => {
    console.log('handle server error', err)
    res.status(500).send({msg: 'Internal Server Error'})
}

const handlePSQL400Error = (err, req, res, next) => {
    console.log('handle psql 400 error', err)
    if (err.code === '22P02') {
        res.status(400).send({msg: 'bad request'})
    } else {
        next(err);
    }
}

const handleCustomErrors = (err, req, res, next) => {
    console.log('handle custom errors', err)
    if(err.msg === 'no article found' && err.status === 404) {
        res.status(404).send({msg: 'no article matching that id'})
    } else if (err.msg === 'no comments found' && err.msg === 404) {
        res.status(404).send({msg: 'no comments mathcing that id'})

    } else {
        next(err);
    }
}



module.exports = { handleServerErrors, handlePSQL400Error, handleCustomErrors}