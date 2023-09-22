const { describe, expect, it } = require( '@jest/globals');
const CalculatorServices = require('../services/calculator.js');


describe('Testing addition', () => {

    const calculator = new CalculatorServices();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should sum two numbers', () => {
        const result = calculator.CalculatorAddition(1,2)
        expect(result).toBe(3.00);
    })
    
    // testing two decimal numbers
    it('Should sum two numbers', () => {
        const result = calculator.CalculatorAddition(4.4,3.2)
        expect(result).toBe(7.60);
    })

    // testing one decimal and one negative number
    it('Should sum two numbers', () => {
        const result = calculator.CalculatorAddition(-4 ,3.2)
        expect(result).toBe(-0.80);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            calculator.CalculatorAddition(-4, "batata");
        }).toThrowError("Second argument is not a number");
    });

    // trying to pass a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            calculator.CalculatorAddition(true, true);
        }).toThrowError("Both arguments should be numbers");
    });

    // trying to pass empty body
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorAddition(null, null);
        }).toThrowError("Both arguments are null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorAddition(1, null);
        }).toThrowError("Second argument is null");
    });

    // trying to pass one empty argument
    it('Should throw an error message', () => {
        expect(() => {
            calculator.CalculatorAddition(null, 1);
        }).toThrowError("First argument is null");
    });

    // trying to pass an incorrect syntax
    it('Should throw an reference error', () => {
        expect(() => {
            calculator.CalculatorAddition(true, aaaaaa, b);
        }).toThrow(ReferenceError);
    });
});