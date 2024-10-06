let value = prompt("Enter the number"); 
console.log(value);
try {
    value = value.split('').reverse().join('');
    console.log(`Reversed string is : ${value}`);
} catch (err) {
    console.log(`Error : ${err.message}`);
} finally {
    console.log(`Type of value is : ${typeof value}`);
}
