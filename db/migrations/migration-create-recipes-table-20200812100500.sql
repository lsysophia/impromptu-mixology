CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    instruction TEXT,
    pic TEXT,
    FOREIGN KEY user_id REFERENCES users(id)
);



