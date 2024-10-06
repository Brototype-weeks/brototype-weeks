let limit = parseInt(prompt("Enter the limit of array"));
let arr= [];
for(let i=0; i<limit; i++ ){
     arr[i] = parseInt(prompt("Enter the array values:"));
}
console.log(arr);

let arr1 = [...arr];

for(i=0; i<limit; i++){
    arr1[i] *= arr1[i+1]; 
}
arr1.pop();
console.log(arr1.join(' '));