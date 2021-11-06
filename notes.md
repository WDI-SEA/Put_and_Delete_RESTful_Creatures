# Building a New Express Appp

## In the Command Line

1. `mkdir <dirName>` 
2. `cd <dirName>`
3. `npm init -y`
4. `npm i express ejs`
5. `npm i express-ejs-layouts`
6. `touch index.js`
7. VERY IMPORTANT `echo "node_modules" >> .gitignore`
8. `code .`

## In index.js

1. Import the express package: `const express = require('express')`
2. Create an instance of an express app: `const app = express()`
3. Require ejs layouts: `const ejsLayouts = require('express-ejs-layouts')`
3. Create a home route: 
        `app.get('/', (req, res)=>{
            res.send('Hello, World!')
        })`
4. Tell app to listen for requests on port num (ususlly 8000 or 3000)
        `app.listen(8000)`
5. Add Middleware
        `app.set('view engine', 'ejs')`
        `app.use(ejsLayouts)`
6. Create views folder 
9. MUST add 'layout.ejs' to views dir!
10. add `<%- body %>` and boilerplate to layout.ejs 
        This is so (all other .ejs files inside of views dir go there when their route is called ) we can only type boilerplate once 

## Sanity Check

- Check `package.json` for `"express": "^<versionNum>"`, `"ejs:^<versionNum>"`, and `"express-ejs-layouts:^<versionNum>"`
- Run `nodemon index.js` in the terminal.
- Run `localhost:8000` in url 
