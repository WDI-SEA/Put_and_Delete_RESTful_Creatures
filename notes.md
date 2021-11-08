# Creating a New Node operation

* In your terminal begin by creating a new directory for your Express app, using the command `mkdir <name of directory>`. 

* Change directories by using `cd <name of directory>` and initialize the directory so that it's ready to use with NPM by using the command `npm init -y`.

* This is a good time to create your entry point file by using the command `touch index.js`.

* Now we can actually install express so it's ready to use with the command `npm i express`. At this point we can also install ejs and express-ejs-layouts by using the commands `npm i ejs` and `npm i express-ejs-layouts`. Alternatively we can install all the modules at the same time by typing `npm i express ejs express-ejs-layouts`

* To ease the git push process and have an app that is easily forked and cloned by others we need to make sure all of our modules arent pushed to git. To accomplish this we'll add a .gitignore document to our directory. The easiest way to do this is by making sure we're in our projects root directory and typing `echo "node_module" >> .gitignore`

* Our index.js file should include a few lines of code for express, ejs, and ejslayouts to run properly    
    
    `const express = require('express')`

    `const app = express()`
    
    `const ejsLayouts = require('express-ejs-layouts')`

    `app.set('view engine', 'ejs')`

    `app.use(ejsLayouts)`

