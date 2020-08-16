const fetch = require('node-fetch')

const cocktailByName = (searchName) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        },
    })
    .then((response) => {
        return response.json()
    })
    .then((parsedResponse) => {
        const foundDrink = parsedResponse.drinks[0]
        const name = foundDrink.strDrink
        const howTo = foundDrink.strInstructions
        const foundIngredients = [foundDrink.strMeasure1, foundDrink.strIngredient1,foundDrink.strMeasure2, foundDrink.strIngredient2,foundDrink.strMeasure3, foundDrink.strIngredient3,foundDrink.strMeasure4, foundDrink.strIngredient4,foundDrink.strMeasure5,foundDrink.strIngredient5,
            foundDrink.strMeasure6, foundDrink.strIngredient6, foundDrink.strMeasure7, foundDrink.strIngredient7,foundDrink.strMeasure8, foundDrink.strIngredient8,foundDrink.strMeasure9, foundDrink.strIngredient9, foundDrink.strMeasure10, foundDrink.strIngredient10,
            foundDrink.strMeasure11,foundDrink.strIngredient11, foundDrink.strMeasure12, foundDrink.strIngredient12, foundDrink.strMeasure13, foundDrink.strIngredient13, foundDrink.strMeasure14,foundDrink.strIngredient14, foundDrink.strMeasure15,foundDrink.strIngredient15]

        const filteredIngredients = []

        for(i = 0; i < foundIngredients.length; i++) {
            if (foundIngredients[i]){
                filteredIngredients.push(foundIngredients[i])
            }
        }
        
        const imageURL = foundDrink.strDrinkThumb

        const cocktailData = {
            name: name,
            ingredients: filteredIngredients.join(' '),
            instruction: howTo,
            pic: imageURL,

        }
        
        // console.log(cocktailData)
        return cocktailData
    })
}

module.exports = cocktailByName