mkdir directory name
cd into directory name
touch index.js
npm init -y
npm i express ejs express-ejs-layouts
echo "node_modules" >> .gitignore
code . (to open VS Code)
in the index.js file:
const express = require("express")
const app = express()
const ejsLayouts = require("express-ejs-layouts")
MIDDLEWARE:
app.set("view engine", ejs)
app.use(ejsLayouts)
ADD VIEWS FOLDER
add home.ejs 
add layout.ejs
ADD CONTROLLERS FOLDER