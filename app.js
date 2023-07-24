const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollars) {
    // Convertir dólares a yenes japoneses
    return dollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromEuroToDollar(euros) {
    // Convertir euros a dólares estadounidenses
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    // Convertir yenes japoneses a Libras esterlinas
    return yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};
