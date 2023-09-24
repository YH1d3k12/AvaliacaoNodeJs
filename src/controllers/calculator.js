const CalculatorServices = require('../services/calculator.js');


const calculator = new CalculatorServices();


class CalculatorController
{
    // ********************** Addition ********************** //
    CalculatorAddition(req, res)
    {
        try
        {
            const result = calculator.CalculatorAddition(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {

            res.status(500).json({
                message: error.message
            })
        }   
    }
    
    // ********************** Subtraction ********************** //
    CalculatorSubtraction(req, res)
    {
        try
        {
            const result = calculator.CalculatorSubtraction(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // ********************** Division ********************** //
    CalculatorDivision(req, res)
    {
        try
        {
            const result = calculator.CalculatorDivision(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // ********************** Multiplication ********************** //
    CalculatorMultiplication(req, res)
    {
        try
        {
            const result = calculator.CalculatorMultiplication(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // ********************** Exponentiation ********************** //
    CalculatorExponentiation(req, res)
    {
        try
        {
            const result = calculator.CalculatorExponentiation(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // ********************** SquareRoot ********************** //
    CalculatorSquareRoot(req, res)
    {
        try
        {
            const result = calculator.CalculatorSquareRoot(
                req.body.num1
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = CalculatorController;