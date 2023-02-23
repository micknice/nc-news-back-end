const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
require('jest-sorted');


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
    test('get /api/articles request returns array sorted by date created in descending order', () => {
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then(response => {
            const articles = response.body.articles;                      
            expect(articles).toBeSortedBy('created_at', {descending: true, coerce: false});                    
        })
    })
})
describe('get /api/articles/:article_id', ()=> {
    test('request returns article object with the specified id ', ()=> {
        return request(app)
        .get('/api/articles/1')
        .expect(200)
        .then(response => {
            const article = response.body.articles
            expect(article).toMatchObject({
                author: expect.any(String),
                    title: expect.any(String),
                    article_id: expect.any(Number),
                    topic: expect.any(String),
                    created_at: expect.any(String),
                    votes: expect.any(Number)
            })
            expect(article.article_id).toBe(1)
        })
    })
})
describe('GET /api/articles/:article_id/comments', ()=> {
    test('valid request -server responds with an array of comments objects', () => {
        return request(app)
        .get('/api/articles/1/comments')
        .expect(200)
        .then(response => {
            const comments = response.body.comments
            expect(Array.isArray(comments)).toBe(true)
            comments.forEach(comment => {
                expect(comment).toMatchObject({
                    comment_id: expect.any(Number),
                    votes: expect.any(Number),
                    created_at: expect.any(String),
                    author: expect.any(String),
                    body: expect.any(String),
                    article_id: expect.any(Number)
                })
            })
        })
    })
    test('comments object array is ordered from most recent', () => {
        return request(app)
        .get('/api/articles/1/comments')
        .expect(200)
        .then(response => {
            expect(response.body.comments).toBeSortedBy('created_at', {descending : true, coerce: false})                          
        })       
    })
})
describe('POST /api/articles/:article_id/comments', () => {
    test('server responds with 201 status and the posted comment', () => {
        const newComment = { username: 'lurker',
        body: 'opinions.tm'}
        return request(app)
        .post('/api/articles/1/comments')
        .expect(201)
        .send(newComment)
        .then(response => {
            expect(response.body).toMatchObject({
                posted_comment: {
                    comment_id: expect.any(Number),
                    body: 'opinions.tm',
                    article_id: 1,
                    author: 'lurker',
                    votes: expect.any(Number),
                    created_at: expect.any(String)
                }
            })
            console.log(response.body)            
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
    test('server returns 400 when recieves invalid parametric endpoint', () => {
        return request(app)
        .get('/api/articles/badId')
        .expect(400)
        .then(response => {
            const msg = response.body
            expect(msg).toEqual({msg: 'bad request'})
        })
    })
    test('server returns 404 and a no article matching that id message when receives valid but non existent param', () => {
        return request(app)
        .get('/api/articles/10000')
        .expect(404)
        .then(response => {
            const body = response.body
            expect(body).toEqual({msg: 'no article matching that id'})
        })
    })    
    test('server returns 404 and a no comments matching that id message when receives valid param with no comments in the db', () => {
        return request(app)
        .get('/api/articles/10000/comments')
        .expect(404)
        .then(response => {
            const body = response.body
            expect(body).toEqual({msg: 'no comments matching that id'})
        })
    })    
})