# Creating a backend using express and node
## Create a directory
```bash
mkdir my-node-project
cd my-node-project
npm init -y
touch index.js 
npm i express ejs express-ejs-layouts method-override
echo "node_modules" >> .gitignore
code .
```

This series of commands will create a directory with npm initialized. You can also run `git init` to create a local git repo for this project as well.

## Import and start the express app
Add the following code to your entry point (index.js in most cases).
```js
// import the express package
const express = require('express')

// create an instance of an express app
const app = express()

// import ejsLayouts
const ejsLayouts = require('express-ejs-layouts')

// import fs in order to modify .json files (built-in)
const fs = require('fs')

// import methodOverride in order to put and destroy
const methodOverride = require('method-override')

// middleware
app.use(ejsLayouts)
app.set('view engine', 'ejs')

// body-parser middleware (allows req.body to work for forms)
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
// allows you to serve site-wide static files, such as css
app.use(express.static('public'))

// create a home route
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// tell app to listen for requests on port 8000
app.listen(8000, () => {
    console.log('now listening on 8000')
})
```

The above code will import the express package, which you previously installed in terminal. It will then create an express app, and set the home route, in which you can send whatever information you like.

`app.listen(number)` tells the app where to listen for the request. In the above, it is port 8000, which can be accessed by clients at `localhost:8000`

## File Structure
Your home directory should contain the following directories:
* `/controllers`
  * Route URL pattern requests that start with a particular element
  * Must be referenced with `app.use('URLPATTERN', require('./controllers/CONTROLLER.JS))`
* `/views`
  * contains one .ejs file for each HTML page on the site
  * organized into subdirectors - one for each controller
  * also contains homepage of site and `layout.ejs`
* `/public`
  * not required
  * allows you to serve static html, js, and css across the entire website
  * should contain subdirectories for html, js, and css
* `/node_modules` (don't touch)

You will also need the following files in the home directory:
* `index.js` (or other name, must match `main` in `package.json`)
* `.gitignore`
* `package-lock.json` (don't touch)