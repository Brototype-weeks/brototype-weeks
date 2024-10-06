function main(){
    let size = parseInt(prompt("Enter the size :"));
    let arr=[];

    function getArray(){
        console.log("array values:");
        for (let i = 0; i < size; i++) {
            arr[i] = [];
            for (let j = 0; j < size; j++) {
                 arr[i][j] = parseInt(prompt("Enter the values of array"));
                
            }
         console.log(arr[i].join(' '));
            
        }

    }
    getArray();

    function displayArray() {
        console.log("array elements are:");
        for (let i = 0; i < size; i++) {
            console.log(arr[i].join(' '));
        }
    }

    displayArray();
}

main();