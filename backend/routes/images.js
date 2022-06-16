const express = require('express');
const router = express.Router();

const images = require('../data/images.json');

//route: GET api/images
//note: get all images
//access: public
router.get('/', async (req, res) => {
    try {
        res.json(images)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
})


module.exports = router