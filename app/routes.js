const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/OLPRhome', (req, res) => {
    res.redirect('/index');
})
router.post('/PLPRhome', (req, res) => {
    res.redirect('/index');
})
router.post('/SPRhome', (req, res) => {
    res.redirect('/index');
})

module.exports = router
