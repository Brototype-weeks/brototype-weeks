let limit = parseInt(prompt("enter the limit "));
let arr=[];
for(let i=0; i<limit; i++){
    arr[i] = parseInt(prompt("Enter the values "));''
}
console.log("enetered number  "+ arr);
let arr1= arr.sort((a,b)=>b-a);
console.log(arr1.join(' '));