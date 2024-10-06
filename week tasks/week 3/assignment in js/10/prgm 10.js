let limit = prompt("Enter the arraay limit");
limit = parseInt(limit);
let arr1=[];
let arr2=[];
for(let i=0; i< limit; i++){
    arr1[i] = parseInt(prompt("enter the first array"));
}
for( i=0; i< limit; i++){
    arr2[i] = parseInt(prompt("enter the second array"));
}
console.log("entered number is :"+arr1);
console.log("entered number is :"+arr2);
for(let j=0; j< limit; j++){
    let temp = arr1[j];
    arr1[j] = arr2[j];
    arr2[j] = temp;
}
console.log("swapping numbers: "+arr1.join(' '));
console.log("swapping numbers: "+arr2.join(' '));