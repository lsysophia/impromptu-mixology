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

    document.getElementById('search').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('shdcshkdhkfshdkfhdskh')
        // console.log(event.currentTarget)
        console.log("sldcqmlekoignsdf")
        // const newName = event.currentTarget
        // console.log(newName)
        const inputName = document.getElementById('inputName').value
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputName}`, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            console.log(response.json())
            return response.json()
        })
        .then((parsedRes) => {
            console.log(parsedRes.drinks[0])
        })

    })

}, false)

//will need to link to input from DOM or response from a form in views



