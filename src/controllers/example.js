const ExampleServices = require('../services/example.js');


const examples = new ExampleServices();


class ExampleController
{
    // ********************** Exercise 1 ********************** //
    SumTwoNumbers(req, res)
    {
        try
        {
            const result = examples.SumTwoNumbers(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 3 ********************** //
    CalculateAverageWeight(req, res)
    {
        try
        {
            const result = examples.CalculateAverageWeight(
                req.body.people
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    
    // ********************** Exercise 6 ********************** //
    ConvertSecondsToTime(req, res)
    {
        try
        {
            const result = examples.ConvertSecondsToTime(
                req.body.seconds
            );

            res.status(200).json({
                hours: result.hours,
                minutes: result.minutes,
                seconds: result.seconds,
                message: result.message
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    
    // ********************** Exercise 8 ********************** //
    CreateMultiplicationTable(req, res)
    {
        try
        {
            const result = examples.CreateMultiplicationTable(
                req.body.number
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

}

module.exports = ExampleController;