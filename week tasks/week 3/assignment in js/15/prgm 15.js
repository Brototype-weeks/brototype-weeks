main();

function main(){
    let arr = [];
    let num = parseInt(prompt("Enter the values")); 
   function getarray(){
     for(let i=0; i< num; i++){
        arr[i] = parseInt(prompt("Enter the array" + "[" + i+"]"));
     }

    }
    function displayArray(){
        console.log("the array is :" + arr.join(' '));
       
    }
getarray();
displayArray();
}
