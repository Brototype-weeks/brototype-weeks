function myFilter(myArray, callback) {
    const sum = myArray.reduce((acc, num) => acc + num, 0);
    callback(sum);
    return sum;
}
function isSumEven(sum) {
    if (sum % 2 === 0) {
        console.log("The sum is even.");
    } else {
        console.log("The sum is odd.");
    }
}
const myArray = [];
 const limit = prompt("Enter the limit");
 for (let i = 0; i < limit; i++) {
     myArray[i] = parseFloat(prompt("Enter the value :"))
    
}
const result = myFilter(myArray, isSumEven);
console.log(result); 
