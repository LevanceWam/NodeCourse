const fiz = require('../exercise1');

describe('Fizzbuzz', () => {
    it('should throw an expection if input is falsey', () => {
        const args = [null, undefined, NaN, '', 0, false]
        args.forEach(a => {
            expect(() => {
                fiz.fizzBuzz(a)
            });
        });
    });

    it('should return fizzbuzz if the input is divisible by both numbers', () => {
        const result = fiz.fizzBuzz(15);
        expect(result).toBe('Fizz Buzz');
    });
    it('should return fizz if the input is divisible by 3', () => {
        const result = fiz.fizzBuzz(9);
        expect(result).toBe('Fizz');
    });
    it('should return buzz if the input is divisible by 5', () => {
        const result = fiz.fizzBuzz(10);
        expect(result).toContain('Buzz');
    });
    it('should return input if the input is not divisible by either number', () => {
        const result = fiz.fizzBuzz(2);
        expect(result).toBe(2);
    });

})