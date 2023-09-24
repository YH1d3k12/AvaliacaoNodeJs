const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing Multiplication', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should multiply two numbers', () => {
        const result = calculator.CalculatorMultiplication(4,2)
        expect(result).toBe(8.00);
    })
    
    // testing two decimal numbers
    it('Should multiply two numbers', () => {
        const result = calculator.CalculatorMultiplication(12.4,3.2)
        expect(result).toBe(39.68);
    })

    // testing one decimal and one negative number
    it('Should multiply two numbers', () => {
        const result = calculator.CalculatorMultiplication(-4, 10)
        expect(result).toBe(-40.00);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorMultiplication(-4, "batata");
        }).toThrowError("Not a Number");
    });

    // trying to pass a boolean
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication(true, false);
        }).toThrowError("Boolean");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication(null, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication(1, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication(null, 1);
        }).toThrowError("Null");
    });
    
    // trying to pass one undefined argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication(undefined, 1);
        }).toThrowError("Not a Number");
    });

     // trying to pass an empty string as argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorMultiplication("", 1);
        }).toThrowError("Empty");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorMultiplication(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});