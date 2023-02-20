const app = require('../app');
const { handleServerErrors } = require('./error-handling-controller');

const getApi = (req, res, next) => {
    res.status(200).send({msg: 'Success'})

}










module.exports = { getApi };







