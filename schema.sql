DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   quantity integer NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name text NOT NULL,
  password text NOT NULL
);

CREATE TABLE recipes (
  id int NOT NULL AUTO_INCREMENT
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
