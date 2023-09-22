class CalculatorServices
{
    /*************** Addition ****************/
    CalculatorAddition(num1, num2)
    {
        if (num1 != null && num2 != null)
        {
            if (!isNaN(num1) && typeof num1 != "boolean" && !isNaN(num2) && typeof num2 != "boolean")
            {
                const result = parseFloat(num1) + parseFloat(num2);
                return parseFloat(result.toFixed(2));
            }
            else
            {
                if (isNaN(num1) && typeof num1 == "boolean" && isNaN(num2) && typeof num2 == "boolean") 
                {
                    throw new TypeError("Both arguments should be numbers");
                } 
                else if (isNaN(num1) && typeof num1 == "boolean") 
                {
                    throw new TypeError("First argument is not a number");
                } 
                else 
                {
                    throw new TypeError("Second argument is not a number");
                }
            }
        }
        else
        {
            if (num1 === null && num2 === null)
            {
                throw new Error("Both arguments are null");
            }
            else if (num1 === null)
            {
                throw new Error("First argument is null");
            }
            else
            {
                throw new Error("Second argument is null");
            }
        }
    }

    /*************** Subtraction ****************/
    CalculatorSubtraction(num1, num2)
    {
        if (num1 != null && num2 != null)
        {
            if (!isNaN(num1) && typeof num1 != "boolean" && !isNaN(num2) && typeof num2 != "boolean")
            {
                const result = parseFloat(num1) - parseFloat(num2);
                return parseFloat(result.toFixed(2));
            }
            else
            {
                if (isNaN(num1) && typeof num1 === "boolean" && isNaN(num2) && typeof num2 === "boolean") 
                {
                    throw new TypeError("Both arguments should be numbers");
                } 
                else if (isNaN(num1)) 
                {
                    throw new TypeError("First argument is not a number");
                } 
                else 
                {
                    throw new TypeError("Second argument is not a number");
                }
            }
        }
        else
        {
            if (num1 === null && num2 === null)
            {
                throw new Error("Both arguments are null");
            }
            else if (num1 === null)
            {
                throw new Error("First argument is null");
            }
            else
            {
                throw new Error("Second argument is null");
            }
        }
    }

    /*************** Division ****************/
    CalculatorDivision(num1, num2)
    {
        if (num1 != null && num2 != null)
        {
            if (!isNaN(num1) && typeof num1 != "boolean" && !isNaN(num2) && typeof num2 != "boolean")
            {
                const result = parseFloat(num1) / parseFloat(num2);
                return parseFloat(result.toFixed(2));
            }
            else
            {
                if (isNaN(num1) && typeof num1 === "boolean" && isNaN(num2) && typeof num2 === "boolean") 
                {
                    throw new TypeError("Both arguments should be numbers");
                } 
                else if (isNaN(num1)) 
                {
                    throw new TypeError("First argument is not a number");
                } 
                else 
                {
                    throw new TypeError("Second argument is not a number");
                }
            }
        }
        else
        {
            if (num1 === null && num2 === null)
            {
                throw new Error("Both arguments are null");
            }
            else if (num1 === null)
            {
                throw new Error("First argument is null");
            }
            else
            {
                throw new Error("Second argument is null");
            }
        }
    }

    /*************** Multiplication ****************/
    CalculatorMultiplication(num1, num2)
    {
        if (num1 != null && num2 != null)
        {
            if (!isNaN(num1) && typeof num1 != "boolean" && !isNaN(num2) && typeof num2 != "boolean")
            {
                const result = parseFloat(num1) * parseFloat(num2);
                return parseFloat(result.toFixed(2));
            }
            else
            {
                if (isNaN(num1) && typeof num1 === "boolean" && isNaN(num2) && typeof num2 === "boolean") 
                {
                    throw new TypeError("Both arguments should be numbers");
                } 
                else if (isNaN(num1)) 
                {
                    throw new TypeError("First argument is not a number");
                } 
                else 
                {
                    throw new TypeError("Second argument is not a number");
                }
            }
        }
        else
        {
            if (num1 === null && num2 === null)
            {
                throw new Error("Both arguments are null");
            }
            else if (num1 === null)
            {
                throw new Error("First argument is null");
            }
            else
            {
                throw new Error("Second argument is null");
            }
        }
    }

    /*************** Pontecy ****************/
    CalculatorPotency(num1, num2)
    {
        if (num1 != null && num2 != null)
        {
            if (!isNaN(num1) && typeof num1 != "boolean" && !isNaN(num2) && typeof num2 != "boolean")
            {
                const result = Math.pow(parseFloat(num1), parseFloat(num2));
                return parseFloat(result.toFixed(2));
            }
            else
            {
                if (isNaN(num1) && typeof num1 === "boolean" && isNaN(num2) && typeof num2 === "boolean") 
                {
                    throw new TypeError("Both arguments should be numbers");
                } 
                else if (isNaN(num1)) 
                {
                    throw new TypeError("First argument is not a number");
                } 
                else 
                {
                    throw new TypeError("Second argument is not a number");
                }
            }
        }
        else
        {
            if (num1 === null && num2 === null)
            {
                throw new Error("Both arguments are null");
            }
            else if (num1 === null)
            {
                throw new Error("First argument is null");
            }
            else
            {
                throw new Error("Second argument is null");
            }
        }
    }


    /*************** SquareRoot ****************/
    CalculatorSquareRoot(num1)
    {
        if (num1 != null)
        {
            if (isNaN(num1) && typeof num1 === "boolean")
            {
                const result = Math.sqrt(parseFloat(num1));
                return parseFloat(result.toFixed(2));
            }
            else
            {
                throw new TypeError("Argument is not a number");
            }
        }
        else
        {
            throw new Error("Arguments is null");
        }
    }
}

module.exports = CalculatorServices;