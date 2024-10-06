let my_height = prompt("Enter your height: ");
console.log("entered height is :"+my_height)
try {
if (isNaN(my_height)) {
   throw new Error("notANumberError");
} else if (my_height > 200) {
   throw new Error("HugeHeightError");
} else if (my_height < 10) {
   throw new Error("TinyHeightError");
} else {
   console.log(my_height);
}
}
catch (err) {
   console.log(err.message);
   }
