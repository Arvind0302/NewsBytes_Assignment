const express = require('express');
const router = express.Router();
const {shortenUrl, decodeUrl} = require('../controllers/url') 

router.post('/shorten', shortenUrl);
router.get('/:hash',decodeUrl);

module.exports = router;
