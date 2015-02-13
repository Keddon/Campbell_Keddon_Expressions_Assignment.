/**
 * Created by keddon campbell on 2/12/15 Expression Assignment.
 */


alert("Welcome to the very first calculator created by Keddon. This calculator will give you the result of any two numbers that you provide.");


var firstNumber = prompt("What is your first number?");
var operator = prompt("Please press the number related to the operation you would like to use. \n Press 1 for Divide. \n Press 2 for Multiply. \n Press 3 for Subtract. \n Press 4 for Addition. \n Press 5 to find percentages. eg 16 %of 90 = 14.4");
var secondNumber = prompt("what is your second number?");
var calculation;
var fixer = Number(operator);
var ranArray = [firstNumber,secondNumber,100];

console.log(operator);

switch (fixer) {
    case 1 :
        1;
        calculation = Number(firstNumber) / Number(secondNumber);
        break;
    case 2 :
        2;
        calculation = Number(firstNumber) * Number(secondNumber);
        break;
    case 3 :
        3;
        calculation = Number(firstNumber) - Number(secondNumber);
        break;
    case 4 :
        4;
        calculation = Number(firstNumber) + Number(secondNumber);
        break;
    case 5 :
        calculation = (ranArray[1]/ranArray[2]) * ranArray[0];
    default :
        console.log("all is well");

}

console.log("The answer you were looking for is " +calculation);