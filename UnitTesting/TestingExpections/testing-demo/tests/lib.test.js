const lib = require('../lib');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('It should return the greeting message', () => {
        const result = lib.greet('vance');
        expect(result).toMatch(/vance/);
        expect(result).toContain('vance');
    })

});

describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        // too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Too specific 
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);

        // Proper Way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
    })
});

describe('getProduce', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toBe({
        //     id: 1,
        //     price: 10
        // }); // this test fails because objects are located on the memory and we are not referencing the right one 

        expect(result).toEqual({
            id: 1,
            price: 10
        });

        expect(result).toMatchObject({
            id: 1,
            price: 10
        });
        expect(result).toMatchObject('id', 1);
    });
});

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false]
        args.forEach(a => {
            expect(() => {
                lib.registerUser(a)
            });
        });
    });

    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('vance');
        expect(result).toMatchObject({
            username: 'vance'
        });
        expect(result.id).toBeGreaterThan(0);
    });
})