/**
 * Created by keddon campbell on 2/12/15 Expression Assignment.
 */


alert("Welcome to the very first calculator created by Keddon");


var firstNumber = prompt("What is your first number?");
var secondNumber = prompt("what is your second number?");
var operator = prompt("Please select an operation. Your options are: + * - / ");
var calculation;
var fixer = Number(operator);


/* switch (operator) {  //added a set of case statement to see if they make things simple
    case 1 : "/"
        calculation = firstNumber / secondNumber; //this does not seem to be working
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

*/
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
    default :
        console.log("something may have went wrong, lets try again");
        console.log(operator);



}
 /*if (operator = String("/")) {
    calculation = Number(firstNumber) / Number(secondNumber);}
    else if (operator = String("*")) {
        calculation = Number(firstNumberv) * Number(secondNumber);}
        else if (operator = "-") {
            calculation = Number(firstNumber) - Number(secondNumber);}
            else if (operator = "+") {
                calculation = Number(firstNumber) + Number(secondNumber);

}
*/

var test = [firstNumber,operator,secondNumber];
var test2 = test[0]+test[1]+test[2];


console.log(test);
console.log(calculation);
console.log(test2);
console.log("The answer of " +Number(firstNumber) + operator + Number(secondNumber)+ " is " +calculation);