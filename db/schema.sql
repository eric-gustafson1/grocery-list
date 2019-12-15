DROP DATABASE IF EXISTS grocery_db;

CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceries(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item varchar(100) NOT NULL,
    store varchar(100)
);

-- Seed the db
INSERT INTO groceries(item, store) VALUES('ground beef', 'Sprouts'),('apples', 'Sprouts'), ('grated moz', 'Soopers');
