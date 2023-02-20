const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');

beforeEach(() => seed(testData));

afterAll(() => db.end());

describe('api', () => {
    test('get 200 response from server', () => {
        return request(app)
        .get('/api')
        .expect(200)
        .then(response => {
            expect(response.body.msg).toBe('Success')
        })
    })

})
describe('GET /api/topics', () => {
    test('get  /api/topics request reponds with topics object containing an array of topic objects ', () => {
        return request(app)
        .get('/api/topics')
        .expect(200)
        .then(response => {
            const resBodyTopics = response.body.topics                  
            expect(resBodyTopics.length).toBe(3)
            resBodyTopics.forEach(topic => {
                expect(topic).toMatchObject({
                            slug: expect.any(String),
                            description: expect.any(String)
                        })       
            });

        })
    })
})
describe('errors', () => {
    test('server returns 404 when recieves get request to undefined endpoint', () => {
        return request(app)
        .get('/api/topiary')
        .expect(404)
    })
})