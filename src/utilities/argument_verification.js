
class ArgumentVerification
{
    // ...args is an array of arguments
    isIsANumber(...args)
    {
        args.forEach((arg, index) => {
            if(isNaN(arg))
            {
                throw new TypeError(`Not a Number, argument at index: ${index}, of value: ${arg} is not a number`)
            }
        });

        return true;
    }

    // ...args is an array of arguments
    isItABoolean(...args)
    {
        args.forEach((arg, index) => {
            if(typeof arg === "boolean")
            {
                throw new TypeError(`Boolean, argument at index: ${index} is a boolean`)
            }
        });

        return true;
    }

    // ...args is an array of arguments
    isItNullOrEmpty(...args)
    {
        args.forEach((arg, index) => {
            if(arg === null)
            {
                throw new TypeError(`Null, argument at index: ${index} is empty`)
            }
            else if (arg === undefined)
            {
                throw new TypeError(`Undefined, argument at index: ${index} is undefined`)
            }
            else if (typeof arg === "string" && arg.trim() === "")
            {
                throw new TypeError(`Empty, argument at index: ${index} is a empty string`)
            }
        });

        return true;
    }
}


module.exports = ArgumentVerification;