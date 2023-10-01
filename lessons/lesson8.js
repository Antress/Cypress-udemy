//Declarative functions
function hellOne(){
    console.log('Hello one!')
}
hellOne()

//Anonymus function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with argument
function printName(name, lastName){
console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')

//Function with return
function multiplyByTwo(number){
    var result = number * 2 
    return result
}
console.log(multiplyByTwo(100))

//import function
import { printAge } from '../helper/printHelper.js'
printAge(30)

//import everything
import * as helper from '../helper/printHelper.js'
helper.printAge(70)