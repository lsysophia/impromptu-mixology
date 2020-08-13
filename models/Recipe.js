const db = require("../db/config")

class Recipe {
    constructor({id, name, ingredients, instruction, pic}) {
        this.id = id || null;
        this.name = name;
        this.ingredients = ingredients;
        this.instruction = instruction;
        this.pic = pic;
    }

    static getAll() {
        return db.query('SELECT * FROM recipes')
        .then((recipes) => recipes.map((recipe) => new this(recipe)))
    }

    static getByName(name) {
        return db.oneOrNone('SELECT * FROM recipes WHERE name = $1', name)
        .then((recipe) => {
            if (recipe) return new this(recipe)
            else throw new Error ('No recipe found')
        })
    }

    save() {
        return db.one(
            `INSERT INTO recipes
            (name, ingredients, instruction, pic)
            VALUES
            ($/name/, $/ingredients/, $/instruction/, $/pic/)
            RETURNING *`, this
        )
        .then((newRecipe) => Object.assign(this, newRecipe))
    }

    update(changes){
        Object.assign(this, changes)
        return db.one(
            `UPDATE recipes SET
            name = $/name/,
            ingredients = $/ingredients/,
            instruction = $/instruction/,
            pic = $/pic/
            RETURNING *`, this
        )
        .then((updatedRecipe) => Object.assign(this, updatedRecipe))
    }

    delete() {
        return db.none('DELETE FROM recipes WHERE id = $/id/', this)
    }

}

module.exports = Recipe