const express = require('express')
const router = express.Router()
const fs = require('fs')

// Prehistorci Lesson
// Index Route-Lab
router.get('/', (req, res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)
    // for checking
    // console.log(prehistoricData)
    res.render('prehistoric/index.ejs', {prehistoricData})
})

// New Route- Lab
router.get('/new', (req, res)=> {
    res.render('prehistoric/new.ejs')
})

// Show Route-Lab
router.get('/:idx', (req, res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)
    let prehistoricIndex = req.params.idx
    res.render('prehistoric/show.ejs', {myPrehistoric: prehistoricData[prehistoricIndex]})
})

// Post route- post a new prehistoric
router.post('/', (req, res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)

    // add a new dino to the dinoData
    prehistoricData.push(req.body)
    // save updated dinoData to JSON
    fs.writeFileSync('./prehistoric.json', JSON.stringify(prehistoricData))
    // redirect to GET /dinosaurs(index)
    // have to keep the /dinosaurs in there because it is going to go through the middleware again
    res.redirect('/prehistoric')
})

module.exports = router