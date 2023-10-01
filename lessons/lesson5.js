//Logical "AND"
console.log(true && true) // all values have to be TRUE for expression to be TRUE

//Logical "OR"
console.log(true || false) // any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense)

//Logical "NOT"
console.log(!true)
console.log(6 !== 10)