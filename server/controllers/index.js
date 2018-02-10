var models = require('../models');
var express = require('express');

const headers = {};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('message get!');
      
      models.messages.get(res, (err, results) => {
        if (err) {
          res.writeHead(404, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(results);
        }
      });
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('message post!');
      
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get!');
      models.users.get(res, (err, results) => {
        if (err) {
          res.writeHead(404, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(results);
        }
      });

    },
    post: function (req, res) {
      console.log('users post!');
      
      var args = [req.body.user];
      var sql = 'SELECT user FROM users WHERE user = ?;'; 
      
      models.users.post(res, sql, args, (err, results) => {
        console.log('called it!');
        if (err || results.length > 0) {
          res.writeHead(404, headers);
          res.end();
          
        } else {
          sql = 'INSERT INTO users (user) values ( ? )';
          models.users.post(res, sql, args, (err, results) => {
            
            if (err) {
              res.writeHead(404, headers);
              res.end();
            } else {
              res.writeHead(201, headers);
              res.end();
            }
          });
        }
        
      });
    }
  }
};

