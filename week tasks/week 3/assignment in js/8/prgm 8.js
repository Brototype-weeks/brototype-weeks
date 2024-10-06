let limit = prompt("Enter the limit");
let sum =0;
limit = parseInt(limit);
if (isNaN(limit)) {
    console.log("Enter valid number ");
}else{
    for(i=1; i<=limit; i++){
        if (i%2 == 1) {
            sum  += i;
            
        }
    }
    console.log("the sum is "+sum);
    
}
