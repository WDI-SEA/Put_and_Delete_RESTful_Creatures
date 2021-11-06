const express = require("express")
const router = express.Router()
const fs = require('fs')

//Index Route
router.get('/', (req, res)=> {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // console.log(dinoData)

    let nameFilter = req.query.nameFilter
    if (nameFilter) {
        dinoData = dinoData.filter((dino)=> {
            return dino.name.toLowerCase() === nameFilter.toLowerCase()
        })
    }
    res.render('dinosaurs/index.ejs', {dinoData})
})

// New Route
router.get('/new', (req, res)=> {
    res.render('dinosaurs/new.ejs')
})

// get update form
router.get('/edit/:idx', (req, res)=> {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    res.render('dinosaurs/edit.ejs', {dinoID: req.params.idx, dino: dinoData[req.params.idx]})
})

router.put('/:idx', (req, res)=> {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // reassigning name and type fields of the dino to be editted
    dinoData[req.params.idx].name = req.body.name
    dinoData[req.params.idx].type = req.body.type

    // save the editted dinosaurs to the json file
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs')
})

// Show Route
router.get('/:idx', (req, res)=> {
    // trying to get a perticular dino with an index
    // have to load the array 
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    // get array index from url parameter
    let dinoIndex = req.params.idx
    // http://localhost:8000/dinosaurs/3--in browser, it will console log the third one in the array
    // console.log(dinoData[dinoIndex])
    res.render('dinosaurs/show.ejs', {myDino: dinoData[dinoIndex]})
})

// Post route- post a new dino
router.post('/', (req, res)=> {
    // for checking to see if the form works
    // console.log(req.body)
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    // add a new dino to the dinoData
    dinoData.push(req.body)
    // save updated dinoData to JSON
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    // redirect to GET /dinosaurs(index)
    // have to keep the /dinosaurs in there because it is going to go through the middleware again
    res.redirect('/dinosaurs')
})

router.delete('/:idx', (req,res)=> {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    // removed the deleted dinosaur from the dinosaurs array
    dinoData.splice(req.params.idx, 1)
    // save the new dinosours to the JSON file
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs')
})


module.exports = router