drop database if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  user TEXT
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  user INTEGER,
  message TEXT,
  room TEXT,
  FOREIGN KEY (user) 
    REFERENCES users (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

