const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing Subtraction', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should subtract two numbers', () => {
        const result = calculator.CalculatorSubtraction(1,2)
        expect(result).toBe(-1.00);
    })
    
    // testing two decimal numbers
    it('Should subtract two numbers', () => {
        const result = calculator.CalculatorSubtraction(4.4,3.2)
        expect(result).toBe(1.20);
    })

    // testing one decimal and one negative number
    it('Should subtract two numbers', () => {
        const result = calculator.CalculatorSubtraction(-4 ,3.2)
        expect(result).toBe(-7.20);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorSubtraction(-4, "batata");
        }).toThrowError("Not a Number");
    });

    // trying to pass a boolean
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction(true, false);
        }).toThrowError("Boolean");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction(null, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction(1, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction(null, 1);
        }).toThrowError("Null");
    });

    // trying to pass one undefined argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction(undefined, 1);
        }).toThrowError("Not a Number");
    });

     // trying to pass an empty string as argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSubtraction("", 1);
        }).toThrowError("Empty");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorSubtraction(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});