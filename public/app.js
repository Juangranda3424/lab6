
// JUAN GRANDA
function toCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || !isFinite(fahrenheit)) {
        throw new TypeError('Debe ser un número finito');
    }   

    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

// JUAN GRANDA

function toFahrenheit(centigrados) {
    if (typeof centigrados !== 'number' || !isFinite(centigrados)) {
        throw new TypeError('Debe ser un número finito');
    }   
    return ((centigrados * (9 / 5)) + 32).toFixed(1);
}
