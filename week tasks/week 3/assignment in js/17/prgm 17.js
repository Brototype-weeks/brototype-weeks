function addition(num1, num2) {
  return num1 + num2;
}
function substraction(num1, num2) {
  return num1 - num2;
}

function multipication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 == 0) {
    return "division zero ";
  } else {
    return num1 / num2;
  }
}

let choice = parseInt(
  prompt(
    "1. addition \n 2. substraction \n 3. multiplicaton \n 4. division \n Enter your choice:"
  )
);

let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));
let result;
switch (choice) {
  case 1:
    console.log("addition");
    result = addition(num1, num2);
    console.log(num1 + "+" + num2 + "=" + result);
    break;
  case 2:
    console.log("substraction");
    result = substraction(num1, num2);
    console.log(num1 + "-" + num2 + "=" + result);
    break;
  case 3:
    console.log("multipication");
    result = multipication(num1, num2);
    console.log(num1 + "*" + num2 + "=" + result);
    break;
  case 4:
    console.log("division");
    result = division(num1, num2);
    console.log(num1 + "/" + num2 + "=" + result);
    break;
  default:
    console.log("choose correct menu");
    break;
}
