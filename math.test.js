const res = require('./math');

test('Factorial de 5 = 120', () => {
    expect(res.factorial(3)).toBe(120);
});

test('Fibonacci de 7 = 13', () => {
    expect(res.fibonacci(7)).toBe(13);
});
