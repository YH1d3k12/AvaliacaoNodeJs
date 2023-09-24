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
        }).toThrowError("Not a Number");
    });

    // trying to pass a boolean
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(true, false);
        }).toThrowError("Boolean");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(null, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(1, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(null, 1);
        }).toThrowError("Null");
    });

    // trying to pass one undefined argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision(undefined, 1);
        }).toThrowError("Not a Number");
    });

     // trying to pass an empty string as argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorDivision("", 1);
        }).toThrowError("Empty");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorDivision(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});