CREATE DATABASE gas;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    pay INTEGER
);

CREATE TABLE gassers(
    id SERIAL PRIMARY KEY,
    gasser_id INTEGER REFERENCES users(id),
    name varchar(255),
    location VARCHAR(255),
    bank INTEGER 
);