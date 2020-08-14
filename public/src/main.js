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
        //add post request to backend?

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
}, false)
