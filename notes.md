## Set up Express App

* mkdir <file name>
* cd into file
* npm init -y
* touch index.js (entry point file)
* npm i express (install express)
    * install ejs 
    * install express-ejs-layouts 
* git init (if needed)
* echo "node_modules" >> .gitignore
* code .
* to set-up express in your entry point file: 
    // import express, ejs layouts
    const express = require('express')
    const ejsLayouts = require('express-ejs-layouts')

    // create an instance of an express app
    const app = express()

    //add middleware
    app.set('view engine', 'ejs')
    app.use(ejsLayouts)

    // create a home route (also template for other routes)
    app.get('/', (req, res)=>{
        res.send('Hello, world!')
    })

    // tell our app to listen for requests on port 8000 (at bottom)
    app.listen(port(usually 8000/3000))

    test by running nodemon and going into browser to localhost:port#

* create controllers folder to keep your route files organized (.js files)
* create views folder to organize your ejs files
* layout.ejs will be global
* in layout.ejs, create an HTML boilerplate and within the body tags, add <%- body %> (prevents from having to repeat boilerplate)
* route files (in controllers folder) will have to import express again and add: 
    const router = express.Router()
    each method will be called on router (ie router.get)
    bottom of file needs: module.exports = router
* to bypass HTML5 and use PUT and DELETE install method-override, import it at the top of your entry point file (const methodOverride = require('method-override')) and add to middleware (app.use(methodOverride('_method')))
    to add this to a form add /?_method=PUT or =DELETE to the action and the method="POST"
