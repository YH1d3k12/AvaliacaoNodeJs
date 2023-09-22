const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing Division', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should divide two numbers', () => {
        const result = calculator.CalculatorDivision(4,2)
        expect(result).toBe(2.00);
    })
    
    // testing two decimal numbers
    it('Should divide two numbers', () => {
        const result = calculator.CalculatorDivision(12.4,3.2)
        expect(result).toBe(3.88);
    })

    // testing one decimal and one negative number
    it('Should divide two numbers', () => {
        const result = calculator.CalculatorDivision(-4, 10)
        expect(result).toBe(-0.40);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorDivision(-4, "batata");
        }).toThrowError("Second argument is not a number");
    });

    // trying to pass a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            calculator.CalculatorDivision(true, false);
        }).toThrowError("Both arguments should be numbers");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(null, null);
        }).toThrowError("Both arguments are null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(1, null);
        }).toThrowError("Second argument is null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(null, 1);
        }).toThrowError("First argument is null");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorDivision(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});