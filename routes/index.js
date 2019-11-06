const music = require('../data/music.json')
const technology = require('../data/technology.json')
const sports = require('../data/sports.json')


const express = require('express');

var router = express.Router();


router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/api', (req, res) => {
  // console.log(req, 'request')
  // console.log(req.body)
  let selection = req.body.category
  console.log(selection)
  switch (Number(selection)) {
    case 0:
      //Case for Music
      console.log(`Music`)
      res.json(music)
      break;
    case 1:
      //Case for Technology
      console.log(`Technology`)
      res.json(technology)
      break;
    case 2:
      //Case for Sports
      console.log(`Sports`)
      res.json(sports)
      break;
    default:
      console.log('invalid choice')
  }


})

module.exports = router;
