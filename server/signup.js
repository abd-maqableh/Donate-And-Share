const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo = require("../database/signup")

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

module.exports = router;