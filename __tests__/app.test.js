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
    test('get  /api/topics request responds with topics object containing an array of topic objects ', () => {
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
describe('GET /api/articles', () => {
    test('get /api/articles request responds with articles object containing an array of articles objects', () => {
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then(response => {
            const resBodyArticles = response.body.articles;
            expect(resBodyArticles.length).toBe(12)
            resBodyArticles.forEach(article => {
                console.log(typeof article.created_at)
                expect(article).toMatchObject({
                    author: expect.any(String),
                    title: expect.any(String),
                    article_id: expect.any(Number),
                    topic: expect.any(String),
                    created_at: expect.any(String),
                    votes: expect.any(Number),
                    comment_count: expect.any(Number)

                })
            })
        })
    })
    test('get /api/articles request returns array sorted by date created in ascending order', () => {
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then(response => {
            const datesArray = response.body.articles.map(x => x.created_at = parseInt(x.created_at.slice(0, 9).replace(/-/g, '')));
            console.log(datesArray)
            for (let i = 0; i < datesArray.length - 1; i++) {
                expect(typeof datesArray[i]).toBe('number')
                expect(datesArray[i]).toBeLessThanOrEqual(datesArray[i + 1])
            }           
        })
    })
})
describe('errors', () => {
    test('server returns 404 and not found msg when recieves get request to undefined endpoint', () => {
        return request(app)
        .get('/api/topiary')
        .expect(404)
        .then(response => {
            const body = response.body;
            expect(body).toEqual({msg: 'not found'})
        })
    })
})