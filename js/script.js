/**
 * Created by keddon campbell on 2/12/15 Expression Assignment.
 */


alert("Welcome to the very first calculator created by Keddon. This calculator will give you the result of any two numbers that you provide.");


var firstNumber = prompt("What is your first number?"); //collects the first number from the user
var operator = prompt("Please press the number related to the operation you would like to use. \n Press 1 for Divide. \n Press 2 for Multiply. \n Press 3 for Subtract. \n Press 4 for Addition. \n Press 5 to find percentages. eg 16 %of 90 = 14.4");//collects the information about the opperation the user want to use
var secondNumber = prompt("what is your second number?");//collects the second number
var calculation; // a declared variable for the calculations
var fixer = Number(operator); //converts the user input into a number
var ranArray = [firstNumber,secondNumber,100,0.08375]; // an array that stores data to be used

console.log(operator);

switch (fixer) { // the switch is used to determine the operation the user is interested in.
    case 1 :
        1;
        calculation = Number(firstNumber) / Number(secondNumber); // calculates division
        break;
    case 2 :
        2;
        calculation = Number(firstNumber) * Number(secondNumber); //calculates multiplication
        break;
    case 3 :
        3;
        calculation = Number(firstNumber) - Number(secondNumber); //calculates subtraction
        break;
    case 4 :
        4;
        calculation = Number(firstNumber) + Number(secondNumber); //calculates addition
        break;
    case 5 :
        calculation = (ranArray[1]/ranArray[2]) * ranArray[0]; //calculates percentage
    default :
        console.log("all is well");

}

console.log("The answer you were looking for is " +calculation); // prints the result