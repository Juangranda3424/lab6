function toCelsius(fahrenheit) {

    if (typeof fahrenheit !== 'number') {
        throw new Error('Input must be a number');
    }

    return (fahrenheit - 32) * 5 / 9;
}


function toFahrenheit(centigrados) {
    if (typeof centigrados !== 'number') {
        throw new Error('Input must be a number');
    }   
    return (centigrados * (9 / 5) ) + 32;
}


