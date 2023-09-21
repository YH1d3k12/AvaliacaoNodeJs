const express = require('express');
const ExampleController = require('../controllers/example.js');

const controller = new ExampleController();
const router = express.Router();


router.post('/1', controller.SumTwoNumbers);
router.post('/3', controller.CalculateAverageWeight);
router.post('/6', controller.ConvertSecondsToTime);
router.post('/8', controller.CreateMultiplicationTable);


module.exports = router;