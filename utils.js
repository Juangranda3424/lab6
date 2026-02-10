function toCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || !isFinite(fahrenheit)) {
        throw new TypeError('Debe ser un número finito');
    }   

    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}


function toFahrenheit(centigrados) {
    if (typeof centigrados !== 'number' || !isFinite(centigrados)) {
        throw new TypeError('Debe ser un número finito');
    }   
    return ((centigrados * (9 / 5)) + 32).toFixed(1);
}

function movingAverage(series, window) {
    
    if (!Array.isArray(series) || series.some(x => typeof x !== 'number')) {
        throw new TypeError('series debe ser un arreglo de números');
    }
    
    if (typeof window !== 'number' || !Number.isInteger(window)) {
        throw new TypeError('window debe ser un entero');
    }

    if (window < 2 || window > series.length) {
        throw new RangeError('window debe ser >= 2 y <= series.length');
    }

    var array = [];

    for (let i = 0; i <= series.length - window; i++) {
        var acum = 0;
        for (let j = i; j < i + window; j++) {
            acum = acum + series[j];
        }
        array.push((acum / window).toFixed(2));
    }

    return array;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };