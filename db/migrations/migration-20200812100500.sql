CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    instruction TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT UNIQUE NOT NULL
);

ALTER TABLE recipes ADD COLUMN drinkid INTEGER;

ALTER TABLE recipes ADD COLUMN imgurl TEXT;

DROPPED name column, re-add as UNIQUE;

ALTER TABLE recipes RENAME COLUMN imgurl TO pic;

