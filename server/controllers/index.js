var models = require('../models');

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
    },
    post: function (req, res) {
      console.log('users post!');
    }
  }
};

