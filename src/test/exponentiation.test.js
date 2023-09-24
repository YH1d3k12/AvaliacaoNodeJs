const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing Exponentiation', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should pow the base number by the exponent', () => {
        const result = calculator.CalculatorExponentiation(1,2)
        expect(result).toBe(1.00);
    })
    
    // testing two decimal numbers
    it('Should pow the base number by the exponent', () => {
        const result = calculator.CalculatorExponentiation(4,3.5)
        expect(result).toBe(128.00);
    })

    // testing one decimal and one negative number
    it('Should pow the base number by the exponent', () => {
        const result = calculator.CalculatorExponentiation(-4 ,3.2)
        expect(result).toBe(NaN);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorExponentiation(-4, "batata");
        }).toThrowError("Not a Number");
    });

    // trying to pass a boolean
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation(true, true);
        }).toThrowError("Boolean");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation(null, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation(1, null);
        }).toThrowError("Null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation(null, 1);
        }).toThrowError("Null");
    });

    // trying to pass one undefined argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation(undefined, 1);
        }).toThrowError("Not a Number");
    });

     // trying to pass an empty string as argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorExponentiation("", 1);
        }).toThrowError("Empty");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorExponentiation(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});