const app = require('../app');
const request = require('supertest');
const db = require('../db/connection');
const testData = require('../db/data/test-data');
const devData = require('../db/data/development-data');
const seed = require('../db/seeds/seed');
require('jest-sorted');
const {json} = require('express');


beforeEach(() => seed(devData));

afterAll(() => db.end());

describe('api', () => {
    test('get 200 response from server', () => {
        return request(app)
        .get('/api')
        .expect(200)
        .then(response => {
            const endpoints = response.body.endpoints
            expect(endpoints).toBeInstanceOf(Object)
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
            expect(resBodyTopics.length).toBe(4)
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
    test.only('get /api/articles request responds with articles object containing an array of articles objects', () => {
        return request(app)
        .get('/api/articles')
        .expect(200)
        .then(response => {
            const resBodyArticles = response.body.articles;
            expect(resBodyArticles.length).toBe(36)
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
    describe('GET /api/articles with queries', () => {
        test('get req with valid queries responds with array filtered by topic, sorted by the sort query and ordered in the specified order', () => {
            return request(app)
            .get('/api/articles?topic=coding&sort_by=title&order=asc')
            .expect(200)
            .then(response => {
                const resBodyArticles = response.body.articles;
                expect(resBodyArticles).toBeSortedBy('title', {descending: false, coerce: false})
                resBodyArticles.forEach(article => {
                    expect(article.topic).toBe('coding')
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
        test('valid get req with topic query omitted defaults to all  and responds with array sorted by the sort query and ordered in the specified order', () => {
            return request(app)
            .get('/api/articles?sort_by=title&order=asc')
            .expect(200)
            .then(response => {
                const resBodyArticles = response.body.articles;
                expect(resBodyArticles).toBeSortedBy('title', {descending: false, coerce: false})
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
        test('valid get req with valid sorted_by field omitted defaults to date  sorted by date and ordered in the specified order', () => {
            return request(app)
            .get('/api/articles?order=asc')
            .expect(200)
            .then(response => {

                const resBodyArticles = response.body.articles;
                expect(resBodyArticles).toBeSortedBy('created_at', {descending: false, coerce: false})
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
        test('valid get req with order query omitted defaults to desc  and responds with array sorted by the sort query and ordered in descending order', () => {
            return request(app)
            .get('/api/articles?sort_by=title')
            .expect(200)
            .then(response => {
                const resBodyArticles = response.body.articles;
                expect(resBodyArticles).toBeSortedBy('title', {descending: true, coerce: false})
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
        test('valid get req with topic query not in db reponmds with 200 status and empty array', () => {
            return request(app)
            .get('/api/articles?topic=skating&sort_by=title')
            .expect(200)
            .then(response => {
                const resBodyArticles = response.body.articles;
                expect(resBodyArticles).toEqual([])
            })
        })
    })
})
describe('GET /api/articles/:article_id', ()=> {
    test('request returns article object with the specified id, including correct comment count', ()=> {
        return request(app)
        .get('/api/articles/1')
        .expect(200)
        .then(response => {
            const article = response.body.article
            expect(article).toMatchObject({
                author: expect.any(String),
                    title: expect.any(String),
                    article_id: 1,
                    topic: expect.any(String),
                    created_at: expect.any(String),
                    votes: expect.any(Number),
                    comment_count: 8
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
    test('server responds with 201 status and the posted comment ignoring unnecessary properties', () => {
        const newComment = { username: 'grumpy19',
        body: 'opinions.tm', comment_id: ''}
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
                    author: 'grumpy19',
                    votes: expect.any(Number),
                    created_at: expect.any(String)

                }
            })
                       
        })
    })
    
})
describe('PATCH /api/comments/:comment_id', () => {
    test('patch req on entry with existing votes  w/ negative value increments correctly, returns 201 status and patched_article object', () => {
        return request(app)
        .patch('/api/comments/2')
        .expect(201)
        .send({inc_votes: -10})
        .then(response => {
            
            expect(response.body).toMatchObject({
                patched_comment: {
                    body: "Nobis consequatur animi. Ullam nobis quaerat voluptates veniam.",
                    votes: -3,
                    author: "grumpy19",
                    article_id: 4,
                    created_at: expect.any(String)
                }
            })
        })       
    })
    test('patch req on entry with existing votes  w/ negative value increments correctly, returns 201 status and patched_article object', () => {
        return request(app)
        .patch('/api/comments/3')
        .expect(201)
        .send({inc_votes: 10})
        .then(response => {
            
            expect(response.body).toMatchObject({
                patched_comment: {
                    body: "Qui sunt sit voluptas repellendus sed. Voluptatem et repellat fugiat. Rerum doloribus eveniet quidem vero aut sint officiis. Dolor facere et et architecto vero qui et perferendis dolorem. Magni quis ratione adipisci error assumenda ut. Id rerum eos facere sit nihil ipsam officia aspernatur odio.",
                    votes: 13,
                    author: "grumpy19",
                    article_id: 3,
                    created_at: expect.any(String)
                }
            })
        })       
    })
})
describe('PATCH /api/articles/:article_id', () => {
    test('patch req on entry with existing votes  w/ negative value increments correctly, returns 201 status and patched_article object', () => {
        return request(app)
        .patch('/api/articles/1')
        .expect(201)
        .send({inc_votes: -10})
        .then(response => {
            
            expect(response.body).toMatchObject({
                patched_article: {
                    article_id: 1,
                    title: 'Running a Node App',
                    topic: 'coding',
                    author: 'jessjelly',
                    body: 'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
                    created_at: expect.any(String),
                    votes: -10,
                    article_img_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700'
                }
            })
        })       
    })
    test('patch req on entry with no existing votes w/ positive value increments correctly, returns 201 status and patched_article object', () => {
        return request(app)
        .patch('/api/articles/2')
        .expect(201)
        .send({inc_votes: 10})
        .then(response => {
            expect(response.body).toMatchObject({
                patched_article: {
                    title: 'The Rise Of Thinking Machines: How IBM\'s Watson Takes On The World',
                    topic: 'coding',
                    author: 'jessjelly',
                    body: 'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
                    created_at: expect.any(String),
                    votes: 10,
                    article_img_url: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700'
                }
            })
        })       
    })
})
describe('GET /api/users', () => {
    test('server responds with 200 status and an array of user objects ', () => {
        return request(app)
        .get('/api/users')
        .expect(200)
        .then(response => {
            const resBodyUsers = response.body.users                 
            expect(resBodyUsers.length).toBe(6)
            resBodyUsers.forEach(user => {
                expect(user).toMatchObject({
                    username: expect.any(String),
                    name: expect.any(String),
                    avatar_url: expect.any(String),
                    password: expect.any(String)                         
                })       
            });
        })
    })
})
describe('GET /api/users/:username', () => {
    test('server responds with 200 status and a user object ', () => {
        return request(app)
        .get('/api/users/grumpy19')
        .expect(200)
        .then(response => {
            const user = response.body.user                    
            expect(user).toMatchObject({
                username: expect.any(String),
                name: expect.any(String),
                avatar_url: expect.any(String),
                password: expect.any(String)                        
            })           
        })
    })
})
describe('DELETE /api/comments/:comment_id', () => {
    test('server responds with a 204 status when receives DELETE req with valid and extant comment id', () => {
        return request(app)
        .delete('/api/comments/2')
        .expect(204)
    })
    test('valid DELETE request successfully removes the comment with the specified comment_id from the db', () => {
        return request(app)
        .delete('/api/comments/1')
        .expect(204)
        .then(() => {
            return request(app)
            .get('/api/articles/9/')
            .expect(200)
            .then(response => {
                const article = response.body.article
                expect(article.comment_count).toBe(8)
                expect(article).toMatchObject({
                    author: 'grumpy19',
                    title: "Learn HTML5, CSS3, and Responsive WebSite Design in One Go",
                    article_id: 9,
                    body: 'Both CSS3 and HTML5 are just about fully supported in all modern browsers, and we there are techniques in place to patch old browsers that lack support. So there is no disadvantage to using CSS3 and HTML5 today. The opposite is true, however: there are many painful, frustrating disadvantages with forgoing HTML5 and CSS3. You may already “know” a bit of HTML5 and a touch of CSS3 (or perhaps you probably know enough old-school HTML and CSS, and with this knowledge, you might have thought you needn’t learn HTML5 and CSS3 fully.',
                    topic: 'coding',
                    created_at: '2020-05-26T14:06:00.000Z',
                    votes: 0,
                    article_img_url: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?w=700&h=700',
                    comment_count: 8
                })
            })
            
        })
    })
})
xdescribe('POST /api/articles', () => {
    test('server responds with 201 status and the posted comment ignoring unnecessary properties', () => {
        const newArticle = {
            author: "grumpy19", 
            title: "how to pass a test", 
            body: "You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites", 
            topic: "coding", 
            article_img_url: "https://images.pexels.com/photos/14174469/pexels-photo-14174469.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1"
                
        }
        return request(app)
        .post('/api/articles')
        .expect(201)
        .send(newArticle)
        .then(response => {
            expect(response.body).toMatchObject({
                posted_article: {
                    article_id: expect.any(Number),
                    author: 'grumpy19',
                    votes: expect.any(Number),
                    created_at: expect.any(String),
                    comment_count: expect.any(Number)
                }
            })                      
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
    test('server responds with 400 status and request missing username field if passed request with missing username property', () => {
        const newComment = { 
        body: 'opinions.tm', comment_id: ''}
        return request(app)
        .post('/api/articles/1/comments')
        .expect(400)
        .send(newComment)
        .then(response => {
            expect(response.body).toMatchObject({
                msg: 'request missing required field'
            })                       
        })
    })
    test('server responds with 400 status and request missing body field if passed request with missing username property', () => {
        const newComment = { username: 'lurker',
         comment_id: ''}
        return request(app)
        .post('/api/articles/1/comments')
        .expect(400)
        .send(newComment)
        .then(response => {
            expect(response.body).toMatchObject({
                msg: 'request missing required field'
            })
                       
        })
    })
    test('server returns 400 when recieves post req w/ invalid parametric ', () => {
        return request(app)
        .post('/api/articles/badId/comments')
        .expect(400)
        .then(response => {
            const msg = response.body
            expect(msg).toEqual({msg: 'bad request'})
        })
    })
    test('server returns 404 and a no article matching that id message when receives post req w/ valid but non existent param', () => {
        return request(app)
        .post('/api/articles/10000/comments')
        .expect(404)
        .then(response => {
            const body = response.body
            expect(body).toEqual({msg: 'no article matching that id'})
        })
    })
    describe('PATCH /api/articles/:article_id errors', () => {
        test('server returns 404 and not found msg when recieves patch request to undefined endpoint', () => {
            return request(app)
            .patch('/api/topiary/1')
            .expect(404)
            .then(response => {
                const body = response.body;
                expect(body).toEqual({msg: 'not found'})
            })
        })
        test('server returns 400 when recieves patch req w/ invalid parametric ', () => {
            return request(app)
            .patch('/api/articles/badId')
            .expect(400)
            .then(response => {
                const msg = response.body
                expect(msg).toEqual({msg: 'bad request'})
            })
        })
        test('server returns 404 and a no article matching that id message when receives patch req w/ valid but non existent param', () => {
            return request(app)
            .patch('/api/articles/10000')
            .expect(404)
            .then(response => {
                const body = response.body
                expect(body).toEqual({msg: 'no article matching that id'})
            })
        })    
        test('server returns 400  when receives patch req w/ invalid req.body value', () => {
            return request(app)
            .patch('/api/articles/1')
            .expect(400)
            .send({inc_votes: 'not a number'})
            .then(response => {
                const body = response.body
                expect(body).toEqual({msg: 'bad request'})
            })
        })
        test('server reponds with 400 status and request missing required field msg patch req with missing inc_vote property', () => {
            return request(app)
            .patch('/api/articles/2')
            .expect(400)
            .send({topic: 'mitch'})
            .then(response => {
                expect(response.body).toMatchObject({
                    msg: 'request missing required field'
                })
            })       
        })       
    })   
    describe('GET /api/articles?queries errors', () => {
        test('get req with invalid sort_by field responds with 400 status and  invalid sort_by field message', () => {
            return request(app)
            .get('/api/articles?topic=coding&sort_by=invalidinput&order=asc')
            .expect(400)
            .then(response => {               
                expect(response.body).toMatchObject({msg: 'invalid sort_by field'})                
            })
        })
        test('get req with invalid order field responds with 400 status and  invalid order field message', () => {
            return request(app)
            .get('/api/articles?topic=coding&sort_by=title&order=invalidinput')
            .expect(400)
            .then(response => {               
                expect(response.body).toMatchObject({msg: 'invalid order field'})               
            })
        })
        test('get req with invalid sort_by and order fields responds with 400 status and  invalid sort_by and order fields message', () => {
            return request(app)
            .get('/api/articles?topic=coding&sort_by=invalidinput&order=invalidinput')
            .expect(400)
            .then(response => {
                expect(response.body).toMatchObject({msg: 'invalid sort_by and order fields'})               
            })
        })
        test('query topic does not exist in db returns 404 and topic not found msg', () => {
            return request(app)
            .get('/api/articles?topic=nobueno')
            .expect(404)
            .then(response => {
                expect(response.body).toMatchObject({msg: 'topic not found'})               
            })
        })
    })
    describe('DELETE /api/comments/:comment_id  errors', () => {
        test('DELETE req w/ invalid comment_id returns 400 status', () => {
            return request(app)
            .delete('/api/comments/invalid_id')
            .expect(400)
            .then(response => {
                expect(response.body).toMatchObject({msg: 'invalid comment_id'})
            })
        })
    })  
    describe('DELETE /api/comments/:comment_id  errors', () => {
        test('DELETE req w/ valid comment_id which is does not feature in the db returns 404 status', () => {
            return request(app)
            .delete('/api/comments/1000')
            .expect(404)
            .then(response => {
                expect(response.body).toMatchObject({msg: 'no comment matching that comment_id'})
            })
        })
    })
    describe('GET /api/users/:username  errors' , () => {
        test('server responds with 404 status and no user with that username msg when username not in db', () => {
            return request(app)
            .get('/api/users/invalidusername')
            .expect(404)
            .then(response => {   
                            
                expect(response.body).toMatchObject({msg: 'no user matching that username'})           
            })
        })
        
    })  
        
})