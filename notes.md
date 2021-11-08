## How to code a NODE/Express app using ejs and ejs layouts

1. mkdir `<directory>`
2. cd `<directory>`
3. npm init -y
4. npm i ejs express express-ejs-layouts method-override // install dependencies
5. touch index.js // creates an entry point file
6. echo "node_modules" >>. gitignore
7. git init
8. code .

### index.js contains the following variables:
* const express = require('express')
* const app = express()
* const ejsLayouts = require('express-ejs-layouts')
* const fs = require('fs') // fs.readFile, fs.writeFile
* const methodOverride = require('method-override') // PUT or DELETE functionality

#### // middleware
* app.set('view engine', ejs)
* app.use(ejsLayouts)

#### // body-parser middleware, makes req.body work
* app.use(express.urlencoded({extended: false}))
* app.use(methodOverride('_method'))

#### // start the server on port 8000
app.listen(8000, () => console.log('listening 🎧'))

#### 📁 *VIEWS* folder contains:
* folders and .ejs files
* layout.ejs contains: html boilerplate, h1 tag, <%- body %>
* home.ejs contains: `<h2>Home Page</h2>`

#### 📁 *CONTROLLERS* folder contains:
* .js files
* change from app.get to router.get
* module.exports = router

❗Don't Forget
* `<%=` squids inject ink (the return value) onto to the page
* `<%` flounders run code, but hide the output
* `%>` always finish with a reverse flounder
