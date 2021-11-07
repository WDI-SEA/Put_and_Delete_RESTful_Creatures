## How to Code a Node/Express App Using EJS & EJS Layouts

### Terminal Code
##### `mkdir <folderName>`
##### `cd <folderName>`
##### `npm init -y`
##### `npm i express ejs express-ejs-layouts` - can also be installed individually
##### `git init` *optional
##### `touch index.js` - creates an entry point file (can be named anything)
##### `mkdir views` - folder **MUST** be called this
##### `touch views/layout.ejs` - file **MUST** be called this
##### `code .`
##### `echo "node_modules" >> .gitignore`

#

### VS Code for Entry Point File (i.e. index.js)
#### Import the packages at the top
```
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
<and any other packages being used>
```
#### Tell app to listen for request on port at the bottom
```
app.listen(8000/3000, () => {
    console.log('connected')
})
```
#### Run `nodemon` to ensure server is connected
#### Create a home route in between
```
app.get('/', (req, res) => {
    res.render('<home.ejs fileName>)
})
```
#### Add middleware - catches incoming requests/outgoing responses to determine where it should go
#### Tells express to use ejs and layouts as the view/template engine
```
app.set('view engine', 'ejs')
app.use(ejsLayouts)
```

#

### VS Code for Layout.ejs File
#### Create a boiler plate `! + enter`
#### Within the body add:
```
<%- body %>
```
#### Any other code written in the body will appear on the frontend of every page

#

### Notes About Views
##### Can create folders within here that will correspond with controllers files if using
##### Within those files will go more `.ejs` files that will have whatever html/js needed
##### Logic used will need to be wrapped in alligator tags `<% %>` on **EVERY** line
##### If logic needs to appear on frontend add equal sign to opening tag `<%= %>`
##### Any other html added to this file will appear on all pages of frontend
##### EJS files that will always be in the views folder and no other folders are `layout.ejs` and `<home>.ejs`

#

### Notes About Controllers
##### Create a controllers folder in the **ROOT** directory
##### `mkdir controllers`
##### Files created within this folder will be `.js` and will correspond with the folders created in the `views` folder
#### Import express at the top of each controllers file
```
const express = require('express')
const router = express.Router()
```
#### Export modules at the bottom of each file
```
module.exports = router
```
#### Within these files will go the different ROUTES
#### GET routes will use RENDER
```
router.get('</urlPattern>', (req, res) => {
    res.render('<pathway to .ejs file>, {object if necessary})
})
```
#### POST/PUT/DELETE routes will redirect
```
res.redirect('</urlPattern>')
```
#### Will have to add these files paths to middleware in entry point file
```
app.use('</folderName>', require('./controllers/<.js fileName>'))