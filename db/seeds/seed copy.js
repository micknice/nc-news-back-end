const format = require('pg-format');
const db = require('../connection');
const {
  convertTimestampToDate,
  createRef,
  formatComments,
} = require('./utils');

const seed = ({ topicData, userData, articleData, commentData }) => {
  return db
    .query(`DROP TABLE IF EXISTS comments;`)
    
    .then(() => {
      const topicsTablePromise = db.query(`
      CREATE TABLE topics (
        slug VARCHAR PRIMARY KEY,
        description VARCHAR
      );`);

      

      return Promise.all([topicsTablePromise]);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        topic VARCHAR NOT NULL REFERENCES topics(slug),
        author VARCHAR NOT NULL REFERENCES users(username),
        body VARCHAR NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        votes INT DEFAULT 0 NOT NULL,
        article_img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700'
      );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE comments (
        comment_id SERIAL PRIMARY KEY,
        body VARCHAR NOT NULL,
        article_id INT REFERENCES articles(article_id) NOT NULL,
        author VARCHAR REFERENCES users(username) NOT NULL,
        votes INT DEFAULT 0 NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );`);
    })
    .then(() => {
      const insertTopicsQueryStr = format(
        'INSERT INTO topics (slug, description) VALUES %L;',
        topicData.map(({ slug, description }) => [slug, description])
      );
      const topicsPromise = db.query(insertTopicsQueryStr);

      const insertUsersQueryStr = format(
        'INSERT INTO users ( username, name, avatar_url) VALUES %L;',
        userData.map(({ username, name, avatar_url }) => [
          username,
          name,
          avatar_url,
        ])
      );
      const usersPromise = db.query(insertUsersQueryStr);

      return Promise.all([topicsPromise, usersPromise]);
    })

};

module.exports = seed;
