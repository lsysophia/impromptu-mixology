const fetch = require('node-fetch')
//will need to link to input from DOM or response from a form in views
const searchName = "tequila sunrise"

const cocktailByName = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`, {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
})

cocktailByName.then((response) => {
    return response.json()
}).then((parsedResponse) => {
    const foundDrink = parsedResponse.drinks[0]
    const name = foundDrink.strDrink
    const howTo = foundDrink.strInstructions
    const ingredients = [foundDrink.strIngredient1,foundDrink.strIngredient2,foundDrink.strIngredient3,foundDrink.strIngredient4,foundDrink.strIngredient5,
        foundDrink.strIngredient6,foundDrink.strIngredient7,foundDrink.strIngredient8,foundDrink.strIngredient9,foundDrink.strIngredient10,
        foundDrink.strIngredient11,foundDrink.strIngredient12,foundDrink.strIngredient13,foundDrink.strIngredient14,foundDrink.strIngredient15]

    const neededIngredients = ingredients.filter((ingredient) => {
        if (ingredient !== null || undefined) {
            return ingredient
        }
    })

    const cocktailData = {
        name: name,
        instruction: howTo,
        ingredients: neededIngredients,
    }
    
    console.log(cocktailData)
    return cocktailData
})

