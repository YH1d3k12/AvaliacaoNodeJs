const express = require('express');
const CalculatorController = require('../controllers/calculator.js');

const controller = new CalculatorController();
const router = express.Router();

router.get('/', (req, res) => {
        res.json({message: {
            title: 'How to use the calculator API',
            text: 'To use my API you need to send a POST request to the following endpoints: /add, /subtract, /divide, /multiply, /pow, /square. The body of the request should be a JSON object with the following properties: num1 and num2. With the exception of /square that requires only num1'
        }});
    });

router.post('/add', controller.CalculatorAddition);
router.post('/subtract', controller.CalculatorSubtraction);
router.post('/divide', controller.CalculatorDivision);
router.post('/multiply', controller.CalculatorMultiplication);
router.post('/pow', controller.CalculatorPotency);
router.post('/square', controller.CalculatorSquareRoot);


module.exports = router;