let limit = parseInt(prompt("Enter the limit :"));
let count = 1;
for(let i=1; i<=limit; i++){
    arr=[];
    for(let j=1; j<=i; j++){
        arr.push(count);
        count++;
    }
    console.log(arr.join(' '));
}
