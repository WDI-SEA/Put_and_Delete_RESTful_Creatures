The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
MacBook-Air:~ ebarw$ cd documents/sei/pumpkinsmashers/deliverables/
MacBook-Air:deliverables ebarw$ ls
Car-Node-Module			js-clock-intervals-exercise
DELIVERABLE_FORK_CLONE.png	js-control-flow
booktown			murder mystery
css-airbnb			sei-tic-tac-toe
fetch-reddit-slideshow		temperature-converter-dom
index.js
MacBook-Air:deliverables ebarw$ git clone https://github.com/emilybarwinczak/Frasier-Routes.git
Cloning into 'Frasier-Routes'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 10 (delta 1), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (10/10), done.
Resolving deltas: 100% (1/1), done.
MacBook-Air:deliverables ebarw$ ls
Car-Node-Module			index.js
DELIVERABLE_FORK_CLONE.png	js-clock-intervals-exercise
Frasier-Routes			js-control-flow
booktown			murder mystery
css-airbnb			sei-tic-tac-toe
fetch-reddit-slideshow		temperature-converter-dom
MacBook-Air:deliverables ebarw$ cd frasier-routes
MacBook-Air:frasier-routes ebarw$ ls
README.md
MacBook-Air:frasier-routes ebarw$ npm init -y
Wrote to /Users/ebarw/Documents/SEI/pumpkinsmashers/deliverables/Frasier-Routes/package.json:

{
  "name": "frasier-routes",
  "version": "1.0.0",
  "description": "### Make sure you shut down your previous app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/emilybarwinczak/Frasier-Routes.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/emilybarwinczak/Frasier-Routes/issues"
  },
  "homepage": "https://github.com/emilybarwinczak/Frasier-Routes#readme"
}


MacBook-Air:frasier-routes ebarw$ npm i express

added 50 packages, and audited 51 packages in 2s

found 0 vulnerabilities
MacBook-Air:frasier-routes ebarw$ touch index.js
MacBook-Air:frasier-routes ebarw$ code .

















Last login: Tue Nov  2 16:29:33 on ttys000

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
MacBook-Air:~ ebarw$ cd documents/sei/pumpkinsmashers/code-alongs/
MacBook-Air:code-alongs ebarw$ mkdir hello-express
MacBook-Air:code-alongs ebarw$ cd hello-express/
MacBook-Air:hello-express ebarw$ npm init -y
Wrote to /Users/ebarw/Documents/SEI/pumpkinsmashers/code-alongs/hello-express/package.json:

{
  "name": "hello-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


MacBook-Air:hello-express ebarw$ touch index.js
MacBook-Air:hello-express ebarw$ npm i express

added 50 packages, and audited 51 packages in 3s

found 0 vulnerabilities
MacBook-Air:hello-express ebarw$ code .
MacBook-Air:hello-express ebarw$ cd ~
MacBook-Air:~ ebarw$ cd documents/sei/pumpkinsmashers/classnotes/
MacBook-Air:classnotes ebarw$ mkdir Pen-Stack-Notes
MacBook-Air:classnotes ebarw$ cd Pen-Stack-Notes/
MacBook-Air:Pen-Stack-Notes ebarw$ touch readme.md
MacBook-Air:Pen-Stack-Notes ebarw$ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
Initialized empty Git repository in /Users/ebarw/Documents/SEI/pumpkinsmashers/classnotes/Pen-Stack-Notes/.git/
MacBook-Air:Pen-Stack-Notes ebarw$ code .
MacBook-Air:Pen-Stack-Notes ebarw$ 




MacBook-Air:hello-express ebarw$ echo "node_modules" >> .gitignore
MacBook-Air:hello-express ebarw$ nodemon

Command Line:
Create a new local directory
mkdir hello-express
Navigate within the new directory and install basic node dependencies
cd hello-express
npm init -y
create the entry point file, index.js
touch index.js
install express js via NPM
npm install express
optional: intiate project for git, if you eventually plan to upload to GitHub
git init
create .gitignore for storing node modules
echo "node_modules" >> .gitignore
open project in coding editor
code .
VS Code:
within the index.js file, import express package
const express = require('express')
create an instance of an express application
const app = express()
create a home route
app.get('/', (req, res) => {
    res.send('Hello, World!')
})
create a port to tell our application what port to listen to requests on
app.listen(8000)
continue below for installing/initializing EJS/EJS layouts

Local setup for EJS
Command Line:
npm install ejs
VS Code:
tell express to use ejs as the view/template engines, in a middleware section:
app.set("view egine", "ejs")
Local setup for EJS Layouts
Command Line:
install express ejs layouts
npm install express-ejs-layout
VS Code:
add to middleware in index.js
app.use(ejsLayouts)
add new folder/directory called "views". Make sure to add a default layout.ejs to views folder.

make sure that all view files have extension .ejs, NOT .html, for example:

index.ejs
sample render using .ejs extension and file within layouts folder:
app.get("/", (req, res)=>{
    res.render("home.ejs")
})
within main project directory, add new folder/directory called "controllers". Inside this controllers folder, create javascript files to correspond to each grouping category

to link these controller files to the index.js, each of these new js files needs to include the following at top:

const express = require("express")
const router = express.Router()
everything else lower in the controller files should start with router. For example:
router.get("/loveit/animals", (req, res)=>{
    const animals = ["zebra", "dog", "cat"]
    res.render("animals.ejs", {faveAnimals: animals})
})
to export router objects to index.js, include this at the end of each controller file:
module.exports = router
in index.js, in your middleware section, include paths for each controller file, which should look similar to this:
app.use("/loveit", require("./controllers/loveit.js"))
views ejs folder/files should be organized similarly to controller js folder/file structures