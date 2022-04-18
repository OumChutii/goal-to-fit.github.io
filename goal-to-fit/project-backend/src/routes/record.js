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
        return res.status(400).send(`Invalid request 1`);
    }
    if (!recordHasOwnKey) {
        return res.status(400).send(`Invalid request 2`);
    };

    const bodyIsAvailable = !body.image || !body.src || !body.actName || !body.type ||
        !body.actDate || !body.quantity || !body.duration
   

    if (bodyIsAvailable) {
        return res.status(400).send(`Invalid request 3`);
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
    return res.status(201).send(records);

});

router.put('/:recordId', (req, res, next) => {

    const recordId = req.params.recordId;
    const index = records.findIndex((r) => r.id === recordId);
    const foundRecord = records[index]

    if (!foundRecord) {
        return res.status(404).send(`Not found Record ID ${recordId}`)
    }

    const body = req.body;

    const recordIsObject = Object.keys(body).length > 0 && Object.keys(body).length === 7;


    const recordHasOwnKey = body.hasOwnProperty("image") && body.hasOwnProperty("src") && body.hasOwnProperty("actName") &&
        body.hasOwnProperty("type") && body.hasOwnProperty("actDate") && body.hasOwnProperty("quantity") &&
        body.hasOwnProperty("duration");
    


    if (!recordIsObject) {
        return res.status(400).send(`Invalid request`);
    }
    if (!recordHasOwnKey) {
        return res.status(400).send(`Invalid request`);
    };

    const bodyIsAvailable = body.image && body.src && body.actName && body.type &&
        body.actDate && body.quantity && body.duration

    if (bodyIsAvailable) {
        let newRecord = {
            id: req.params.recordId,
            image: body.image,
            src: body.src,
            actName: body.actName,
            type: body.type,
            actDate: body.actDate,
            quantity: body.quantity,
            duration: body.duration
        };
        records.forEach(record => {
            if (record.id === newRecord.id) {
                record.image = newRecord.image !="" ? newRecord.image : record.image;
                record.src = newRecord.src !="" ? newRecord.src : record.src;
                record.actName = newRecord.actName !="" ? newRecord.actName : record.actName;
                record.type = newRecord.type !=""? newRecord.type : record.type;
                record.actDate = newRecord.actDate !="" ? newRecord.actDate : record.actDate;
                record.quantity = newRecord.quantity !=""? newRecord.quantity : record.quantity;
                record.duration = newRecord.duration !=""? newRecord.duration : record.duration;
                
    
                return res.status(201).send(record);
            }
        })
    }
    return res.status(400).send(`Invalid request`);


});
router.delete('/:recordId', (req, res, next) => { 
    const recordId = req.params.recordId;
    console.log(recordId)
    const index = records.findIndex((r) => r.id === recordId);
    const foundRecord = records[index]

    if (!foundRecord) {
        return res.status(404).send(`Not found Record ID ${recordId}`)
    }
    console.log(recordId.toString())
    
    const newRecords =records.filter(record => record.id != recordId.toString());

    return res.status(200).send(newRecords);



});

module.exports = router;