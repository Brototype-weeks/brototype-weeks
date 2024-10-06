let limit = parseInt(prompt("enter the array limit"));
let arr = [];
let count = 0;
for (let i = 0; i < limit; i++) {
  arr[i] = parseInt(prompt("Enter the array values"));
}
console.log("entered values are: " + arr);
for(i=0; i< limit; i++){
    if (arr[i] % 2 == 0) {
        count++;
      }             
}
console.log("number of even number : " + count);
