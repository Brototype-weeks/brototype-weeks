let amount = parseFloat(prompt("Enter the amount:"));
console.log(amount);
if (amount <= 250000) {
    
    console.log(amount+" = no tax");
}else if (amount >250000 && amount <= 500000) {
       let tax = ((amount/100)*5);
console.log("income tax amount : " + tax+".00");
}else if (amount >= 500000 && amount <= 1000000) {
    let tax = ((amount/100)*20);
console.log("income tax amount : " + tax+".00");
}else if (amount >= 1000000 && amount <= 500000) {
    let tax = ((amount/100)*30);
console.log("income tax amount : " + tax+".00");

}