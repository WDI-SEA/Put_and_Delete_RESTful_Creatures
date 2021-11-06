# TECHNOLOGIES
* Node - JavaScript web server
* EJS - View engine for Node.  Embedded JavaScript. Allows us to generate HTML pages (front end) that can include dynamic data that is templated.  Allows usage of <% %> tags
* Express - Node.js web framework. Provides server side logic.  Back end framework
* Express-EJS-Layouts - Support for layouts using express EJS

# TERMS
* Middleware - Intercepts requests before it hits the routes and before response is sent back to client.  Modifies incoming/outgoing data.
* Views - folder containing .ejs files.  Renders the data
* Routes - URL handling code.  HTTP verbs (GET, POST, PUT, DELETE, etc) Forwards requests to controller functions.
* Controllers - Callback functions that correspond to the routers to handle requests.  Based on URL request, will respond how we tell it to.

# CREATE PROJECT FOLDER AND INITIALIZE NPM
* mkdir projName
    * cd projName
* npm init -y

# INSTALL NODE MODULES
* npm i express ejs express-ejs-layouts

# CREATE REQUIRED FILES AND FOLDERS
* touch index.js 
* echo "node_modules" >> .gitignore

# IMPORT MODULES AND MIDDLEWARE IN INDEX.JS --- CODE IN PORT LISTENER
* const express = require('express')
* const app = express()
* const ejsLayouts = require('express-ejs-layouts')
* const fs = require('fs')
* const methodOverride = require('method-override')
## MIDDLEWARE
* app.set('view engine', 'ejs')
* app.use(ejsLayouts)
* app.use(express.urlencoded({extended: false}))
* app.use(methodOverride('_method'))
    * methodOverride allows usage of POST/DELETE
* app.use('/viewsFolder', require('./controllers/controllerFile.js'))
    * this will tell requests to go to the controller and render it back from the views
* app.listen(8000, () => {
    console.log("Listening on port 8000")
})

# MISC SETUP - VIEWS AND CONTROLLER FOLDERS/FILES
* mkdir views
    * cd views
    * touch home.ejs layout.ejs
        * all views files are .ejs
    * layout.ejs - create HTML boilerplate.  Add <%- body %> RIGHT below </body> tag
* mkdir controllers
    * create grouped controllers.  .js files