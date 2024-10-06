let PA = prompt("enter a principle amount nummber ");
let IR = prompt("Enter a intrest rate ");
let NY = prompt("Number of years ");
console.log("Principle Amount"+PA);
console.log("Interest Rate"+IR);
console.log("Number of Years"+NY);
PA = parseInt(PA);
IR = parseFloat(IR);
NY =parseFloat(NY);
if (isNaN(PA) || isNaN(IR) || isNaN(NY)) {
    console.log("Enter the valid number");
}else{
   let SI =((PA*IR*NY)/100);
   console.log("The simple intrest is :"+SI);
}