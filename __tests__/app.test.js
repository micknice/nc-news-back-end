const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');

beforeEach(() => seed(testData));

afterAll(() => db.end());

// describe('error handling', ()=> {
//     test('server respondds with 404 if given ?', () => {

//     })
// })

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
            expect(resBodyTopics).toBeInstanceOf(Array)
            expect(resBodyTopics.length).not.toBe(0)
            for (let i =0; i < 3; i++) {
                console.log('resbodytopics[0]', resBodyTopics[0])
                expect(resBodyTopics[i]).toMatchObject({
                    slug: expect.any(String),
                    description: expect.any(String)
                })
            }
        })
    })
    
})