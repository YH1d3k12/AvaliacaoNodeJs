const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing square root', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing square
    it('Should do square root', () => {
        const result = calculator.CalculatorSquareRoot(4)
        expect(result).toBe(2.00);
    })
    
    // testing square
    it('Should do square root', () => {
        const result = calculator.CalculatorSquareRoot(4.4)
        expect(result).toBe(2.10);
    })

    // testing square
    it('Should throw an error', () => {
        expect(() => {
            calculator.CalculatorSquareRoot(-4);
        }).toThrowError("Negative");
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorSquareRoot("batata");
        }).toThrowError("Not a Number");
    });

    // trying to pass a boolean
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSquareRoot(true);
        }).toThrowError("Boolean");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSquareRoot(null);
        }).toThrowError("Null");
    });

    // trying to pass one undefined argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSquareRoot(undefined);
        }).toThrowError("Not a Number");
    });

     // trying to pass an empty string as argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorSquareRoot("");
        }).toThrowError("Empty");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorSquareRoot(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});