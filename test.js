const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One Dollar should be 105.5 Yen", function (){
    expect(fromDollarToYen(2)).toBe(213); 
});
test("One Yen should be 0.006 Pound", function (){
    expect(fromYenToPound(2)).toBe(0.012);
})