const axios = require('axios');


const profanityApi = axios.create({
    baseURL: process.env.PROFANITY_API_URL,
});


const getProfanityCheck = async (text) => {
    const reqBody = {text: text}
    try {
        const response = await profanityApi.post('/api/profanity', reqBody);
        return response.data.containsProfanity;
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {getProfanityCheck}