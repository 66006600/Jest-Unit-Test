const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
      
    // hago  (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
