class ExampleServices
{
    // ********************** Exercise 1 ********************** //
    // Two parametesr returning a single value
    SumTwoNumbers(num1, num2)
    {
        if (!isNaN(num1) && !isNaN(num2))
        {
            const result = parseFloat(num1) + parseFloat(num2);
            return parseFloat(result.toFixed(2));
        }
        else
        {
            if (isNaN(num1) && isNaN(num2)) 
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

    // ********************** Exercise 3 ********************** //
    // Receiving an array of things and returning a single value
    CalculateAverageWeight(people) 
    {
        // Check if the input data is valid
        if (!people || !Array.isArray(people)) 
        {
            throw new TypeError("Invalid input data, people is not an array");
        }
        else if (people.length === 0)
        {
            throw new Error("Invalid input data, people array is empty");
        }

        let totalWeight = people.reduce((sum, person) => {
            // Checks if person.weight is a number before calculation
            if (!isNaN(person.weight)) 
            {
                return sum + parseFloat(person.weight);
            }
            else
            {
                throw new TypeError("Weight should be a number");
            }
        }, 0);

        // Calculate the average weight
        const averageWeight = totalWeight / people.length;

        // Return the calculated average weight
        return parseFloat(averageWeight.toFixed(2));
    }

    // ********************** Exercise 6 ********************** //
    // Returning more than one value
    ConvertSecondsToTime(seconds)
    {
        if (!isNaN(seconds))
        {
            let hours = Math.floor(seconds / 3600);
            seconds -= hours * 3600;

            let minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;

            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                message: `${hours} Hour(s) ${minutes} Minute(s) ${seconds} Second(s)`
            };
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    }

    // ********************** Exercise 8 ********************** //
    // Using a loop to return an array of values
    CreateMultiplicationTable(number) 
    {
        let multiplicationTable = [];

        if (!isNaN(number)) 
        {
            for (let i = 1; i <= 10; i++) 
            {
                multiplicationTable.push
                ({
                    equation: `${number} x ${i}`,
                    result: parseFloat(number) * i
                });
            }
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }

        return multiplicationTable;
    }
};

module.exports = ExampleServices;