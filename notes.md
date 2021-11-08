const express = require('express')
const router = express.Router()
const fs = require('fs')
const methodOverride = require('method-override')

//dino index route
router.get('/', (req, res) =>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // console.log(dinoData)
    res.render('dinosaurs/index.ejs', {myDinos: dinoData})
})
//Dino Filter
router.get('/', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json');
  let dinoData = JSON.parse(dinosaurs);
  let nameFilter = req.query.nameFilter;
  if (nameFilter) {
      dinoData = dinoData.filter(dino => dino.name.toLowerCase() === nameFilter.toLowerCase());
  }
  res.render('dinosaurs/index.ejs', {myDinos: dinoData});
});

//Creat a Dino
router.get('/new', (req, res) => {
    res.render('dinosaurs/new.ejs')
})

//dino show route for specific dino
router.get('/:idx', (req, res) =>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    let dinoIndex = parseInt(req.params.idx)
    res.render('dinosaurs/show.ejs', {myDino: dinoData[dinoIndex]})
})

//creating a dino part 2 after new,  to post the new dino
router.post('/', (req, res) => {
//Reading the JSON file
// Pushing the new animal to the object
// Writing the new JSON file using fs.writeFileSync (this will replace the old dinosaurs.json)
  let dinosaurs = fs.readFileSync('./dinosaurs.json')
  let dinoData = JSON.parse(dinosaurs)
// add item to dinosaurs array
  dinoData.push(req.body)
// save dinosaurs to the data.json file
fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
//redirect to the GET /dinosaurs route (index)
  res.redirect('/dinosaurs');

})


//delete a dino
router.delete('/:idx', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json')
  let dinoData = JSON.parse(dinosaurs)
  // remove the deleted dinosaur from the dinosaurs array
  dinoData.splice(req.params.idx, 1) 
  // save the new dinosaurs to the data.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
  //redirect to the GET /dinosaurs route (index)
  res.redirect('/dinosaurs');
})

//get route for edit form
router.get('/edit/:idx', (req,res)=>{
  let dinosaurs = fs.readFileSync('./dinosaurs.json')
  let dinoData = JSON.parse(dinosaurs)
  res.render('dinosaurs/edit.ejs', {dino: dinoData[req.params.idx], dinoId: req.params.idx})
})
//PUT route for edited dino
router.put('/:idx', (req, res) => {
  let dinosaurs = fs.readFileSync('./dinosaurs.json')
  let dinoData = JSON.parse(dinosaurs)
  //re-assign the name and type fields of the dinosaur to be editted
  dinoData[req.params.idx].name = req.body.name
  dinoData[req.params.idx].type = req.body.type
   // save the editted dinosaurs to the data.json file
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
  res.redirect('/dinosaurs');
})

module.exports = router


const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
const methodOverride = require('method-override')

app.use (methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//body-parser middleware, this will store the data submitted from the form in a user friendly req.body object
//The express.urlencoded() middleware tells body-parser to capture urlencoded data (form data) and store it in req.body. 
//The {extended: false} option ensures that the values in this body will either be strings or arrays. 
app.use(express.urlencoded({extended: false}));

app.use('/dinosaurs', require('./controllers/dinosaurs.js'))
app.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures.js'))










app.get('/', (req, res) => {
    res.render('home.ejs')
})



app.listen(8000, () => {
    console.log("RESTful_creautres")
})