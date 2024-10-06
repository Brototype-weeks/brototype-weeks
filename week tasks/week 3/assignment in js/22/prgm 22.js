function main(){
    let size = parseInt(prompt("Enter the size :"));
    let array1 = [];
    let array2 = [];
    let sum = [];
    function getArray() {
        console.log("first array");
        for(let i=0; i< size; i++){
            array1[i] = [];
            for(let j=0; j < size; j++){
           array1[i][j] = parseInt(prompt("Enter the array1 values:"));
    
            }
    console.log(array1[i].join(' '));
        }
        console.log("Second array");
        for(let i=0; i< size; i++){
            array2[i] = [];
            for(let j=0; j < size; j++){
           array2[i][j] = parseInt(prompt("Enter the array2 values:"));
    
            }
    console.log(array2[i].join(' '));

        }
    }
    getArray();
    function addArray(){
        for(let i=0; i<size; i++){
            sum[i] =[];
            for(let j=0; j<size; j++){
                sum[i][j] = array1[i][j] + array2[i][j];
            }
        }
        return sum;

    }
    addArray();
   
    function displayArray(){
        console.log("sum of array");
        for (let i = 0; i < size; i++) {
            
        console.log(sum[i].join(' '));
        }
    }
    displayArray();
}
main();