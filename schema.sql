DROP DATABASE IF EXISTS grocery_db;

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceries(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item varchar(100) NOT NULL,
    category varchar(100),
    store varchar(100)
);

-- Seed the db
INSERT INTO groceries(item, category, store) VALUES('ground beef','meats', 'Sprouts'),('apples', 'produce','Sprouts'), ('grated moz','deli', 'Soopers');
