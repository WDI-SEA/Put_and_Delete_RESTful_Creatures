const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
// const fs = require('fs')
const methodOverride = require('method-override')

// middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// body-parser middleware
// makes req.body work 
app.use(express.urlencoded({extended: false}))
// overrides post request and put up post and delete request
app.use(methodOverride('_method'))

app.get('/', (req, res)=> {
    // for checking
    // res.send('dino home page')
    res.render('home.ejs')
})

// controllers middleware
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/prehistoric', require('./controllers/prehistoric'))

app.listen(8000, ()=> {
    console.log("It's Dino Time ")
})