const express = require('express');
const records = require('../DataToTast/userRecord.json')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(records);
});

router.get('/:recordId', (req, res, next) => {

    const recordId = req.params.recordId;
    const index = records.findIndex((r) => r.id === recordId);
    const foundRecord = records[index]

    if (!foundRecord) {
        return res.status(404).send(`Not found Record ID ${recordId}`)
    }
    return res.send(foundRecord)

});

router.post('/', (req, res, next) => {
    const body = req.body;
    
    const recordIsObject = Object.keys(body).length > 0 && Object.keys(body).length === 7;
    

    const recordHasOwnKey = body.hasOwnProperty("image") && body.hasOwnProperty("src") && body.hasOwnProperty("actName") &&
        body.hasOwnProperty("type") && body.hasOwnProperty("actDate") && body.hasOwnProperty("quantity") &&
        body.hasOwnProperty("duration");
    

    let newRecord = "";

    if (!recordIsObject) {
        return res.status(400).send(`Invalid request`);
    }
    if (!recordHasOwnKey) {
        return res.status(400).send(`Invalid request`);
    };

    const bodyIsAvailable = !body.image || !body.src || !body.actName || !body.type ||
        !body.actDate || !body.quantity || !body.duration

    if (!bodyIsAvailable) {
        return res.status(400).send(`Invalid request`);
    }

    const currentId = records.length + 1;
    newRecord = {
        id: currentId.toString(),
        image: body.image,
        src: body.src,
        actName: body.actName,
        type: body.type,
        actDate: body.actDate,
        quantity: body.quantity,
        duration: body.duration
    }



    
    records.push(newRecord);
    res.status(201).send(records);

});

router.put('/:recordId', (req, res, next) => { });
router.delete('/:recordId', (req, res, next) => { });

module.exports = router;