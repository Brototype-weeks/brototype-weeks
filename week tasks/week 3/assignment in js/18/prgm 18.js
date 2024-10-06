
let writtenTest = parseFloat(prompt("Enter the written test mark:"));
let labExam = parseFloat(prompt("Enter the lab exam mark:"));
let Assignments = parseFloat(prompt("Enter the Assignments mark:"));


if (isNaN == writtenTest || isNaN == labExam || isNaN == Assignments ) {
    console.log("it is wrong");
}else{
    result = ((writtenTest*70)/100 + ((labExam*20)/100) + ((Assignments*10)/100));
}

console.log("total grade = "+result);