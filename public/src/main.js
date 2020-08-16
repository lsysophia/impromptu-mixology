// const fetch = require("node-fetch")

window.addEventListener('load', () => {
    document.getElementById('addFav').addEventListener('click', (event) => {
        event.preventDefault()
        
        const addFav = {
            "name": document.getElementById("recipe-name").innerText, 
            "ingredients": document.getElementById("recipe-ingredients").innerText,
            "instruction": document.getElementById("recipe-instruction").innerText,
            "pic": document.getElementById("recipe-pic").src
        }
        console.log(addFav)

        xhr = new XMLHttpRequest()
        xhr.open("POST", "/user/recipes");
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(JSON.stringify(addFav));
        xhr.onload = function () {
            if(xhr.status > 300 && xhr.status < 400) {
                window.alert("New recipe added to your collection!")
            }
            console.log(xhr.response)
        }
        xhr.onerror = function () {
            console.log("error")
        }
        
        //req.body comes back as empty object, cannot get it to work!
        // fetch('/user/recipes', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(addFav)
        // }).then((response) => {
        //     console.log(response)
        //     return response.json()
        // }).then((secResponse) => {
        //     console.log(secResponse)
        // })
    })

    //allows user to search cocktail by name and get data via API
    document.getElementById('search').addEventListener('click', (event) => {
        event.preventDefault()
        const inputName = document.getElementById('inputName').value
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputName}`, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            return response.json()
        })
        .then((parsedRes) => {
            console.log(parsedRes.drinks[0])
            const foundDrink = parsedRes.drinks[0]
            const newName = document.getElementById('recipe-name')
            newName.innerText = foundDrink.strDrink

            const newPic = document.getElementById('recipe-pic')
            newPic.src = foundDrink.strDrinkThumb

            const foundIngredients = [foundDrink.strMeasure1, foundDrink.strIngredient1,foundDrink.strMeasure2, foundDrink.strIngredient2,foundDrink.strMeasure3, foundDrink.strIngredient3,foundDrink.strMeasure4, foundDrink.strIngredient4,foundDrink.strMeasure5,foundDrink.strIngredient5,
                foundDrink.strMeasure6, foundDrink.strIngredient6, foundDrink.strMeasure7, foundDrink.strIngredient7,foundDrink.strMeasure8, foundDrink.strIngredient8,foundDrink.strMeasure9, foundDrink.strIngredient9, foundDrink.strMeasure10, foundDrink.strIngredient10,
                foundDrink.strMeasure11,foundDrink.strIngredient11, foundDrink.strMeasure12, foundDrink.strIngredient12, foundDrink.strMeasure13, foundDrink.strIngredient13, foundDrink.strMeasure14,foundDrink.strIngredient14, foundDrink.strMeasure15,foundDrink.strIngredient15]

            const filteredIngredients = []

            for(i = 0; i < foundIngredients.length; i++) {
                if (foundIngredients[i]){
                    filteredIngredients.push(foundIngredients[i])
                }
            }

            const newIngredients = document.getElementById('recipe-ingredients')
            newIngredients.innerText = filteredIngredients.join(' ')

            const newInstruction = document.getElementById('recipe-instruction')
            newInstruction.innerText = foundDrink.strInstructions
        })

    })

}, false)



