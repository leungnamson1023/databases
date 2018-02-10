var connection = require('../db');

module.exports = {
  messages: {
    get: function (res, callback) {
      console.log('models messages get');
      
      var sql = 'SELECT users.user, messages.message, messages.room FROM messages INNER JOIN users WHERE messages.user = users.id;';
      
      
      connection.query(sql, function (err, results) {
        console.log('err: ', err);
        console.log('results: ', results);
        // console.log('field: ', fields);
        results = JSON.stringify(results);
        callback(err, results);
      });
      //do some stuff to get data
      
    }, // a function which produces all the messages
    
    
    post: function () {
      console.log('models messages post');
      connection.query();

      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res, callback) {
      console.log('models users get');
      var sql = 'SELECT user FROM users;';
      connection.query(sql, function (err, results) {
        results = JSON.stringify(results);
        callback(err, results);
      });
      
    },
    post: function (res, sql, args, callback) {
      console.log('models users post');
  
      connection.query(sql, args, function (err, results) {
        callback(err, results);
      });
    }
  }
};


