require('dotenv').config();

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'pantry'
  }
});

module.exports = knex;
