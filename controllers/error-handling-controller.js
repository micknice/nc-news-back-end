const app = require('../app');


const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal Server Error'})
}

const handlePSQL400Error = (err, req, res, next) => {
    if (err.code === '22P02' ) {
        res.status(400).send({msg: 'bad request'})
    } else if( err.code === '23502') {
        res.status(400).send({msg: 'request missing required field'})
    } else {
        next(err);
    }
}

const handleCustomErrors = (err, req, res, next) => {
    if(err.msg === 'no article found' && err.status === 404) {
        res.status(404).send({msg: 'no article matching that id'})
    } else if (err.msg === 'topic not found' && err.status === 404) {
        res.status(404).send({msg: 'topic not found'})
    } else if (err.msg === 'no comments found' && err.status === 404) {
        res.status(404).send({msg: 'no comments matching that id'})
    } else if (err.msg === 'invalid sort_by and order fields' && err.status === 400) { 
        res.status(400).send({msg: 'invalid sort_by and order fields'})
    } else if (err.msg === 'invalid sort_by field' && err.status === 400) {
        res.status(400).send({msg: 'invalid sort_by field'})
    } else if (err.msg === 'invalid order field' && err.status === 400) {
        res.status(400).send({msg: 'invalid order field'})
    } else if (err.msg === 'invalid comment_id' && err.status === 400) {
        res.status(400).send({msg: 'invalid comment_id'})
    } else if (err.msg === 'no comment found matching that comment_id' && err.status === 404) {
        res.status(404).send({msg: 'no comment matching that comment_id'})
    } else if (err.msg === 'no user found matching that username' && err.status === 404) {
        res.status(404).send({msg: 'no user matching that username'})
    }  else if(err.msg === 'no comment found' && err.status === 404) {
        res.status(404).send({msg: 'no comment matching that id'})
    } else {
        next(err);
    }
}



module.exports = { handleServerErrors, handlePSQL400Error, handleCustomErrors}