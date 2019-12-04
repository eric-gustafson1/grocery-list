DROP DATABASE IF EXISTS grocery_db;

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceries(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item varchar(100) NOT NULL
);

-- Seed the db
INSERT INTO groceries(item) VALUES('ground beef'),('apples'), ('avocado');
