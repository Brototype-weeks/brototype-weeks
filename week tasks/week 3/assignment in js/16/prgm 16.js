let number = parseInt(prompt("enter the number "));
let flag = 0;
if (number < 2) {
       flag = 1;
}
for(let i=2; i<= number/2; i++){
       if (number%i == 0) {
              flag = 1;
              break;
       }
}

if (flag==0) {
       console.log(number +" is prime number");
}else{
       console.log(number +" it is not prime number");

}