# Coding out a Node/Express app that uses ejs and ejs layouts

## Express: local setup

### Command Line:

- Create a new local directory

```sh
mkdir hello-express
```

- Navigate within the new directory and install basic node dependencies

```sh
cd hello-express
npm init -y
```

- create the entry point file, index.js

```sh
touch index.js
```

- install express js via NPM

```sh
npm install express
```

- optional: intiate project for git, if you eventually plan to upload to GitHub

```sh
git init
```

- create .gitignore for storing node modules

```sh
echo "node_modules" >> .gitignore
```

- open project in coding editor

```sh
code .
```

### VS Code:

- within the index.js file, import express package

```sh
const express = require('express')
```

- create an instance of an express application

```sh
const app = express()
```

- create a home route

```sh
app.get('/', (req, res) => {
    res.send('Hello, World!')
})
```

- create a port to tell our application what port to listen to requests on

```sh
app.listen(8000)
```

*continue below for installing/initializing EJS/EJS layouts*

## Local setup for EJS

### Command Line:

```sh
npm install ejs
```

### VS Code:

- tell express to use ejs as the view/template engines, in a middleware section:

```sh
app.set("view egine", "ejs")
```

## Local setup for EJS Layouts

### Command Line:

- install express ejs layouts

```sh
npm install express-ejs-layout
```


### VS Code:

- add to middleware in index.js

```sh
app.use(ejsLayouts)
```

- add new folder/directory called "views". Make sure to add a default layout.ejs to views folder. 

- make sure that all view files have extension .ejs, NOT .html, for example:

```sh
index.ejs
```

- sample render using .ejs extension and file within layouts folder:

```she
app.get("/", (req, res)=>{
    res.render("home.ejs")
})
```

- within main project directory, add new folder/directory called "controllers". Inside this controllers folder, create javascript files to correspond to each grouping category

- to link these controller files to the index.js, each of these new js files needs to include the following at top:

```sh
const express = require("express")
const router = express.Router()
```
- everything else lower in the controller files should start with router. For example: 

```sh
router.get("/loveit/animals", (req, res)=>{
    const animals = ["zebra", "dog", "cat"]
    res.render("animals.ejs", {faveAnimals: animals})
})
```

- to export router objects to index.js, include this at the end of each controller file:

```sh 
module.exports = router
```

- in index.js, in your middleware section, include paths for each controller file, which should look similar to this:

```sh
app.use("/loveit", require("./controllers/loveit.js"))
```

- views ejs folder/files should be organized similarly to controller js folder/file structures
