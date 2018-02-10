var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", no password,
// and to the database "chat".

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('hello sql');
});

//to invoke, call exports.dbConnector.connect(); in the 
//file you want to call it

module.exports = connection;