document.getElementsById('addFav').addEventListener('submit', (event) => {
    event.preventDefault()
    const addFav = event.target.name.value
    console.log(addFav)
    //add post request to backend?

})
