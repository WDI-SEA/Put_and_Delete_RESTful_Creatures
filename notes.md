***Making a site that uses ejs and ejs layouts backend methods***

We open up a terminal and create new a new folder called ex:"project"
cd into the new folder

initialize or install NPM and other packages by entering the following commands,
npm init -y
npm i express ejs
npm i express-ejs-layouts

add an index JS file by entering the following command,
touch index.js

Open up VS code and begin by setting up the index.js page you created earlier

*dinosaurs will be used as en example

const express = require('express') //Will import express package
const app = express() //New express app instance
const ejsLayouts = require('express-ejs-layouts') //Import ejsLayouts package
const fs = require('fs') //This built in method will allow json updates

// How to make an INDEX ROUTE
router.get('/', (req,res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

// Middleware (intercepts the object requested before it hits any route)
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//body-parser middleware
// makes req.body work
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// Create a home route
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// Active port will "listen" to "localhost:XXXX" in this case 8000 will be used. Why 8000? The computer keeps port 8000 open in case it is needed for any reason, so we take advantage of this open port.
app.listen(8000, () => {
    console.log('It\'s Dinosaur Time')
})

Above is the coding structure for the index.js. Below is a a basic folder structure that is automatically recognized by Express.

Main Folder >> controllers & views. The main folder will include json files created by the terminal after setting up the packages as explained in the initial stages.