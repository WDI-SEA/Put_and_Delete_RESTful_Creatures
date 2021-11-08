STEP ONE
First make directory and git init

Use command npm init

then install npm i express ejs ejs-express-layout method-overide

Once all has been installed create .gitignore using line echo> .gitignore and add node_modules to it 

Then create server.js and make sure to use like const express = require('express')

Also set const app = express()
other modules have to be set as well like ejsLayout = require('ejs-express-layout)
Method overide also needs to be set up using the like const methodOveride = require('method-overide')

also have to use midware using a line app.set('view engine', 'ejs'), in order to use ejs 

Once all of these modules have been set up you can start coding by making a views file and contollers file

Also you may need to use the like const fs = require('fs'), if you need to read and write from files with JSON data or other forms of data

as you code you will export .js files from your controller file using the app.get method
the syntex for this will be 
app.get('/url, require('controller_path'))

inside you controller files you will use the .js files to access ejs files from you views folder 
inside these files you will need to require express and fs 

Here you will use the app.get('url', (req,res)=>{     })
inside this call back function you can pass objects to the ejs file with data from your JSON file or other data 

Then to end this call back you can use methods like res.render res.redirect and many others.