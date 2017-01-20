CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(4) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    eaten BOOLEAN NOT NULL,
    date DATE,
    PRIMARY KEY (id)
)