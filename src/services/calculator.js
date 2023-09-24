const ArgumentVerification = require('../utilities/argument_verification.js');

const verify = new ArgumentVerification();

class CalculatorServices
{
    /*************** Addition ****************/
    CalculatorAddition(num1, num2)
    {
        verify.isIsANumber(num1, num2);
        verify.isItABoolean(num1, num2);
        verify.isItNullOrEmpty(num1, num2);
        
        const result = parseFloat(num1) + parseFloat(num2);
        return parseFloat(result.toFixed(2));
    }

    /*************** Subtraction ****************/
    CalculatorSubtraction(num1, num2)
    {
        verify.isIsANumber(num1, num2);
        verify.isItABoolean(num1, num2);
        verify.isItNullOrEmpty(num1, num2);

        const result = parseFloat(num1) - parseFloat(num2);
        return parseFloat(result.toFixed(2));
    }

    /*************** Division ****************/
    CalculatorDivision(num1, num2)
    {
        verify.isIsANumber(num1, num2);
        verify.isItABoolean(num1, num2);
        verify.isItNullOrEmpty(num1, num2);

        const result = parseFloat(num1) / parseFloat(num2);
        return parseFloat(result.toFixed(2));
    }

    /*************** Multiplication ****************/
    CalculatorMultiplication(num1, num2)
    {
        verify.isIsANumber(num1, num2);
        verify.isItABoolean(num1, num2);
        verify.isItNullOrEmpty(num1, num2);

        const result = parseFloat(num1) * parseFloat(num2);
        return parseFloat(result.toFixed(2));
    }

    /*************** Exponentiation ****************/
    CalculatorExponentiation(num1, num2)
    {
        verify.isIsANumber(num1, num2);
        verify.isItABoolean(num1, num2);
        verify.isItNullOrEmpty(num1, num2);

        const result = Math.pow(parseFloat(num1), parseFloat(num2));
        return parseFloat(result.toFixed(2));
    }


    /*************** SquareRoot ****************/
    CalculatorSquareRoot(num1)
    {
        verify.isIsANumber(num1);
        verify.isItABoolean(num1);
        verify.isItNullOrEmpty(num1);
        
        const result = Math.sqrt(parseFloat(num1));
        return parseFloat(result.toFixed(2));
    }
}
module.exports = CalculatorServices;