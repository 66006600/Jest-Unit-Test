let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

function fromDollarToYen(dollars) { 
    return dollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};
