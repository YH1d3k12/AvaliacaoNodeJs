// const { describe, expect, it } = require( '@jest/globals');
// const ExampleServices = require('../services/example.js');


// describe('Testing my first exercise', () => {

//     const example = new ExampleServices();

//     //Executed before all tests
//     beforeAll(async () => {
//         console.info('Starting TDD test with Jest!');
//     });

//     afterAll(() => {
//         console.info('Ending all tests');
//     });

//     // testing two regular numbers
//     it('Should sum two numbers', () => {
//         const result = example.SumTwoNumbers(1,2)
//         expect(result).toBe(3.00);
//     })
    
//     // testing two decimal numbers
//     it('Should sum two numbers', () => {
//         const result = example.SumTwoNumbers(4.4,3.2)
//         expect(result).toBe(7.60);
//     })

//     // testing one decimal and one negative number
//     it('Should sum two numbers', () => {
//         const result = example.SumTwoNumbers(-4 ,3.2)
//         expect(result).toBe(-0.80);
//     })

//     // trying to pass a string
//     it('Should throw a TypeError when passing a string', () => {
//         expect(() => {
//             example.SumTwoNumbers(-4, "batata");
//         }).toThrow(TypeError);
//     });

//     // trying to pass a boolean
//     it('It treats the boolean as 1 or 0, dont think its ok', () => {
//         expect(() => {
//             example.SumTwoNumbers(true, false);
//         }).toThrow(TypeError);
//     });

//     // trying to pass an incorrect syntax
//     it('It treats the boolean as 1 or 0, dont think its ok', () => {
//         expect(() => {
//             example.SumTwoNumbers(true, aaaaaa, b);
//         }).toThrow(ReferenceError);
//     });
// }) 