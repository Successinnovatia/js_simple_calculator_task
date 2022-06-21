//Simple calculator task
const calculatorOn = false;
while(!calculatorOn){
const operator = prompt("Choose the operation you want to perform(choose: +, - , * or / )");
if (operator =="+" || operator == "-" || operator== "*" || operator== "/"){

//collect input from user
const number1 = parseFloat(prompt("input first number: "));
const number2 = parseFloat(prompt("input the second number: "));

let answer;

//perform operation and print result
if (operator == "+" ){
    if(isNaN(number1) || isNaN(number2)){
        window.alert("invalid number inputed please try again")
    }
    else {answer = number1 + number2;
    window.alert("Answer = "+answer);}
}

else if(operator == "-" ){
    if(isNaN(number1) || isNaN(number2)){
        window.alert("invalid number inputed please try again")
    }
    else {answer = number1 - number2;
    window.alert("Answer = "+answer);}
}

else if(operator == "*" ){
    if(isNaN(number1) || isNaN(number2)){
        window.alert("invalid number inputed please try again")
    }
    else {answer = number1 * number2;
    window.alert("Answer = "+answer);}
}

else if(operator == "/"){
    if(isNaN(number1) || isNaN(number2)){
        window.alert("invalid number inputed please try again")
    }
    else {answer = number1 / number2;
    window.alert("Answer = "+answer);}
}

}
else(window.alert("invalid operation selected please try again"));

//ask to continue operation or break loop
const calculateAgain = prompt("Do you want to perform another operation(choose: y / n)");
if(calculateAgain == "y"){continue}
else{break};
}
window.alert("Thanks for using calculator");