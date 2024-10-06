let totalmark = prompt("enter the total mark ");
console.log("your total mark "+totalmark);
mark = parseInt(totalmark);

if (mark >= 90 && mark <= 100 ) {
    console.log(mark+"grade is A");
}else if (mark >= 80 && mark <= 89) {
    console.log(mark+"grade is B");
}else if (mark >= 70 && mark <= 79) {
    console.log(mark+"grade is c");
}else if (mark >= 60 && mark <= 69) {
    console.log(mark+"grade is D");
}else if (mark >= 50 && mark <= 59) {
    console.log(mark +"grade is E");
}else if (mark <= 50 && mark >0) {
    console.log(mark +"Failed");
}else{
    console.log("enter valid  mark");
}