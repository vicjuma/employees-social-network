const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('./../middleware/auth');

const dbConfig = config.get('devpt.db');

const pool = new Pool(dbConfig);

pool.on('err', (err, client) => {
  console.log('error on connection', err);
  process.exit(-1);
});


exports.createEmployee = (req, res) => {
  const {} = req.body;
  pool.connect((err, client, done) => {
    
    }
  });
};


exports.signin = (req, res, next) => {
 
};
