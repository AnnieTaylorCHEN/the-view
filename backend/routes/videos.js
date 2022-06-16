const express = require('express');
const router = express.Router();

const videos = require('../data/videos.json');

//route: GET api/videos
//note: get all videos
//access: public
router.get('/', async (req, res) => {
    try {
        res.json(videos)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
})


module.exports = router