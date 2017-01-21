CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(4) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    burger_description VARCHAR(250),
    burger_rating VARCHAR(2),
    burger_notes VARCHAR(250),
    eaten BOOLEAN DEFAULT FALSE NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE burgers;

SELECT * FROM burgers;