# impromptu-mixology
GA unit 2 project


    The project's name and description
    Impromptu Mixology

    A cocktail recipe app where registered users can save recipes that they found, create their own recipes, edit and delete recipes. 

    Your wireframes and user stories

    https://wireframe.cc/hfDRNK

    Once the user has registered they'll be able to: 
    - search for a cocktail recipe by cocktail name, data will be obtained through 3rd party API database. 
    - save the recipe that they like to their profile
    - create their own recipe
    - edit the recipes that they created
    - view all the recipes they've saved
    - delete recipes they don't like
    - view individual recipes

    The technologies, APIs, and modules you used and a description of each

    Bonus 1: User authentication: using passport

    Bonus 2: Utilizing 3rd party API: cocktail library database

    JS DOM manipulation:
    1. fetching data from 3rd party API and display results (search cocktail by name on homepage)

    2. post data that were initially fetched from 3rd party API to database (allowing user to add a cocktail recipe to as favourite) 

    Express JS for server set up, generating views


    A code snippet of a part of the app you're particularly proud of

    One thing I deviated from what's taught in class is that instead of making partial views of boilerplate and footer, I made a partial render helper file to help pass any dynamic information between views. Essentially making the header and footer constant and changing out the body. I decided to give this a try because during the to-do app hw, I ran into the issue of not being able to render the logo image when page loads since nav was on a separate view that was included in the boilerplate. This method seems to be working, and it allows me to update the header dynamically since I was able to pass whether the login is authenticated through the req in the render partial helper. 

    This also allows me to render the views inside the controller, instead of including some in controller some in the router. That was a bit confusing for me..

    Any things you plan to fix or features you plan to add

    Instructions for downloading the code and running it on localhost

    git clone https://github.com/lsysophia/impromptu-mixology
    npm install
    create new database and run migration files in psql to create databases
    npm run dev
    go to localhost:3000 in your browser
    


