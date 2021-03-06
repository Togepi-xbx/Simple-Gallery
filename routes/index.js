const express = require('express')
const router = express.Router()
const config = require('../config')

router.use((req, res, next) => {
  res.locals = config
  next()
})


// Create HTML endpoint
router.get('/', (req, res) => {
  res.render('../view/pages/index', {pageTitle: "Index"})
})

router.get('/login', (req, res) => {
  res.render('../view/pages/login', {pageTitle: "Login"})
})

router.get('/register', (req, res) => {
  res.render('../view/pages/register', {pageTitle: "Register"})
})


module.exports = router;