CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ingredients VARCHAR(255) NOT NULL,
    instruction TEXT,
    pic TEXT
);

ALTER TABLE recipes ADD COLUMN user_id INTEGER

ALTER TABLE recipes ADD CONSTRAINT fk_recipes_users FOREIGN KEY (user_id) 
REFERENCES users (id);
