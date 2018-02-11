var models = require('../models');
var express = require('express');
var fs = require('fs');

const headers = {};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('message get!');
      
      models.messages.get(res, (err, results) => {
        if (err) {
          res.sendStatus(404);
        } else {          
          res.json(results);
        }
      });
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('message post!!!');  

      
      
      models.messages.post(req, res, (err, results) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.sendStatus(201);
        }
          
        //   if (results.length === 0) {
        //     //set new sql 
        //     // call models.users.post
        //       //callback (err, results)
        //         //err --> 404
        //         //
        //   } else {
        //     var userId = results[0].id;
        //     sql = 'INSERT INTO messages (username, message, roomname) values (?, ?, ?);';
        //     args = [userId, req.body.message, req.body.roomname];
        //     models.messages.post(req, res, sql, args, (err, results) => {
        //       if (err) {
        //         res.sendStatus(404);
        //       } else {
        //         res.sendStatus(201);
        //       }
        //     });
        //   }
        // }
      });
      
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
      
      var args = [req.body.username];
      var sql = 'SELECT username FROM users WHERE username = ?;'; 
      
      models.users.post(res, sql, args, (err, results) => {
        console.log('called it!');
        if (err || results.length > 0) {
          res.writeHead(404, headers);
          res.end();
          
        } else {
          sql = 'INSERT INTO users (username) values ( ? );';
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

