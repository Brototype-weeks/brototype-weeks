let num = parseInt(prompt("Enter the number "));
arr1 = [];
arr2 = [];
sum = [];
console.log("entred first array");
for(let i = 0; i< num; i++){
    arr1[i] = [];
    for(let j = 0; j < num; j++){
    arr1[i][j]= parseInt(prompt("enter the first array values"));

    }
    console.log(arr1[i].join(' '));
}
console.log("entred second array");

for(i= 0; i< num; i++){
    arr2[i] = [];
    for(j=0; j < num; j++){
        arr2[i][j] = parseInt(prompt("Enter the  second array values"));
    }
console.log(arr2[i].join(' '));
}
console.log("sum ");
for(i= 0; i< num; i++){
    sum[i] = [];
    for(j=0; j < num; j++){
        sum[i][j] = arr1[i][j] +arr2[i][j];
    }
console.log(sum[i].join(' '));
}


//  let num = parseInt(prompt("Enter the number "));
//  arr1 = [];
//  arr2 = [];
//  sum = [];
//  get(arr1);
//  get(arr2);
// add()

//  function get(name){ 
//      for(let i = 0; i< num; i++){
//     name[i] = [];
//     for(let j = 0; j < num; j++){
//     name[i][j]= parseInt(prompt("enter the first array values"));
//     }
//     console.log(name[i].join(' '));
// }
//  }
// console.log("sum");
//  function add(){
//      for(i= 0; i< num; i++){
//      sum[i] = [];
//      for(j=0; j < num; j++){
//          sum[i][j] = arr1[i][j] +arr2[i][j];
//      }
//  console.log(sum[i].join(' '));
//  }  
//  }