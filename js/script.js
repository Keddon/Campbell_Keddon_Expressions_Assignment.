/**
 * Created by keddon campbell on 2/12/15 Expression Assignment.
 */


alert("Welcome to the very first calculator created by Keddon");


var firstNumber = prompt("What is your first number?");
var secondNumber = prompt("what is your second number?");
var operator = prompt("Please select an operation. Your options are: 0+ 1* 2- 3/ ");
var calculation;


switch (operator) {  //added a set of case statement to see if they make things simple
    case 1 : "/"
        calculation = firstNumber / secondNumber;
        break;
    case 2 : "*"
        calculation = firstNumber * secondNumber;
        break;
    case 3 : "-"
        calculation = firstNumber - secondNumber;
        break;
    case 4 : "+"
        calculation = firstNumber + secondNumber;
        break;
    default :
        "something may have went wrong, lets try again"
}







 /*if (operator = "/" ) {
    calculation = Number(firstNumber) / Number(secondNumber);}
    else if (operator = "*") {
        calculation = Number(firstNumberv) * Number(secondNumber);}
        else if (operator = "-") {
            calculation = Number(firstNumber) - Number(secondNumber);}
            else if (operator = "+") {
                calculation = Number(firstNumber) + Number(secondNumber);
}

var text =
*/
console.log(calculation);
alert("The answer of " +Number(firstNumber) + operator + Number(secondNumber)+ " is " +calculation);