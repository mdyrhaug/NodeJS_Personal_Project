const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log("hello");
    req.write("Hello");
})


module.exports = router;