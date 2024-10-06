let num1 = prompt("enter a first number:");
let num2 = prompt("enter a second number:");
console.log("First number :"+ num1);
console.log("second number:"+ num2);
num1 = parseInt(num1);
num2 = parseFloat(num2);
if (isNaN(num1) || isNaN(num2)) {
    console.log("Enter a valid number:");   
}else{
   let sum = num1 + num2;
    console.log("the result is: "+sum);
}