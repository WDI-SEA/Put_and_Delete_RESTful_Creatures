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
    
    let typeFilter = req.query.typeFilter
    if (typeFilter) {
        prehistoricData = prehistoricData.filter((preDino)=> {
            return preDino.type.toLowerCase() === typeFilter.toLowerCase()
        })
    }
    res.render('prehistoric/index.ejs', {prehistoricData})
})

// New Route- Lab
router.get('/new', (req, res)=> {
    res.render('prehistoric/new.ejs')
})

// get update form
router.get('/edit/:idx', (req, res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)

    res.render('prehistoric/edit.ejs', {prehistoricID: req.params.idx, prehistoric: prehistoricData[req.params.idx]})
})

router.put('/:idx', (req, res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)

    prehistoricData[req.params.idx].type = req.body.type
    prehistoricData[req.params.idx].img_url= req.body.img_url

    fs.writeFileSync('./prehistoric.json', JSON.stringify(prehistoricData))
    res.redirect('/prehistoric')
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

    prehistoricData.push(req.body)
    
    fs.writeFileSync('./prehistoric.json', JSON.stringify(prehistoricData))
  
    res.redirect('/prehistoric')
})

router.delete('/:idx', (req,res)=> {
    let prehistoric = fs.readFileSync('./prehistoric.json')
    let prehistoricData = JSON.parse(prehistoric)
    
    prehistoricData.splice(req.params.idx, 1)
    
    fs.writeFileSync('./prehistoric.json', JSON.stringify(prehistoricData))
    res.redirect('/prehistoric')
})

module.exports = router