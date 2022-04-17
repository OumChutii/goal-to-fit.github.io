const express = require('express');

const router = express.Router();


router.get('/',(req, res, next) => {});
router.get('/act-types/:act-types',(req, res, next) => {});
router.get('/:act-id',(req, res, next) => {});
router.post('/',(req, res, next) => {});
router.put('/:act-id',(req, res, next) => {});
router.delete('/:act-id',(req, res, next) => {});


module.exports = router;