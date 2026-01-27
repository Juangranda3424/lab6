const sum = require('./sum');

test('Suma de 4 + 3 = 7', () => {
    expect(sum(3,4)).toBe(7);
});