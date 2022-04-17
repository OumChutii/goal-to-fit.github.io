const express = require('express');
const recordeRoute = require('./record');
const me = require('../DataToTast/dataUserInfo.json')
const router = express.Router();

router.use('/records', recordeRoute);

router.get('/',(req, res, next) => {
    res.send(me)
});
router.get('/userProfile',(req, res, next) => {});
router.post('/userProfile',(req, res, next) => {});
router.put('/userProfile',(req, res, next) => {});
router.delete('/userProfile',(req, res, next) => {});

module.exports = router;