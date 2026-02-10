const res = require('./utils');

test('Juan Granda Centigrados 32°F → 0.0°C', () => {
    expect(res.toCelsius(32)).toBe('0.0');
});

test('Juan Granda Centigrados 100°C → 212.0°F', () => {
    expect(res.toFahrenheit(100)).toBe('212.0');
});

test('Juan Granda Fahrenheit 0°C → 32.0°F', () => {
    expect(res.toFahrenheit(0)).toBe('32.0');
});

test('Juan Granda Fahrenheit −40°C ↔ −40°F', () => {
    expect(res.toFahrenheit(-40)).toBe('-40.0');
    expect(res.toCelsius(-40)).toBe('-40.0');
});

test('Juan Granda MovingAverage [1,2,3], 3 → [2.00]', () => {
    expect(res.movingAverage([1,2,3],3)).toEqual(['2.00']);
});

test('Juan Granda MovingAverage [10,20,30,40], 2 → [15.00, 25.00, 35.00]', () => {
    expect(res.movingAverage([10,20,30,40],2)).toEqual(['15.00', '25.00', '35.00']);
});
