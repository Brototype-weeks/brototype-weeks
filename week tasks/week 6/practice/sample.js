// // manipulate string in (set)
// /*
// function reverse(str) {
    
//     return str.split('').reverse().join('')    
// }
// console.log(reverse('hello'));

// */

// // remove dublicate array
// /*
// function removeDublicates(arr) {
//     return [...new Set(arr)]
// }

// console.log(removeDublicates([1,1,1,2,2,3,4,5]));

// */

// // closures

// /*
// function counter() {
//     let count = 0;
//     return function cout() {
//         count ++;
//         return count;
//     }
// }

// const myCouner = counter();
// console.log(myCouner());
// console.log(myCouner());
// console.log(myCouner());
// */

// /*
// // object value changing.

// const obj = {
//     name :'sarook',
//     address:{
//         city: 'calicut'
//     }
// }
// let obj1 = {...obj}
 
// obj1.address.city = 'malappuram'

// console.log(obj1);

// */

// // let arr=[
// //         {hh:2,ff:3},
// //         {hh:8,ff:5},
// //         {hh:7,ff:2},
// //     ]

// // let arr1 = [arr.hh + arr.ff]

// // let result = arr1.reduce((acc,total)=> acc + total)
// // console.log(result);

// // ----------------------------------------------------------

// // const pal='malayalam'
// // let flag=0
// // for(let i=0;i<pal.length;i++){
// //     if(pal[i]!=pal[pal.length-i-1]){
// //         flag=1;
// //         break
// //     }
// // }
// // if(flag==0){
// //     console.log('palindrome')
// // }else{
// //     console.log('not palindrome')
// // }


// // let arr = [2,3,4,5,6,7,7];
// // for (let i = 0; i < arr.length; i++) {
// // let count = 0;

// //        for (let j = 2; j < arr[i]; j++) {
// //         if (arr[i]%j == 0 ) {
// //             count = 1;
// //             break;
// //         }

// //        }
// //        if (count == 0) {
// //         console.log(arr[i]);

// //     }

// // }

// // ----------------------------------
// // let arr = [2,5, 3, 7, 4, 5, 6, 7, 7];
// // for (let i = 0; i < arr.length; i++) {
//   // let count = 1;
//   // let flag = 0;
//   // for (let k = i + 1; k < arr.length; k++) {
//     // if (arr[i] == arr[k]) {
//       // arr[k] = 0;
//       // count++;
//     // }
//   // }
//   // for (let j = 2; j < arr[i]; j++) {
//     // if (arr[i] % j == 0) {
//       // flag++;
//       // break;
//     // }
//   // }
// // 
//   // if (flag == 0 && arr[i] != 0) {
//   //  
//     // console.log(arr[i], " - ", count);
//   // }
// // }
// // 
// //  -----------------------

// // prime count
// // -----------------
// // let arr = [2, 3, 7, 4, 5, 6, 7, 7];

// // for (let i = 0; i < arr.length; i++) {
// //   let b = 1;
// //   let flag = 0; 

// //   for (let k = i + 1; k < arr.length; k++) {
// //     if (arr[i] === arr[k]) {
// //       arr[k] = 0;
// //       b++; 
// //     }
// //   }

// //   // Check for prime number
// //   if (arr[i] > 1) { 
// //     for (let j = 2; j < arr[i]; j++) {
// //       if (arr[i] % j === 0) {
// //         flag = 1; 
// //         break;
// //       }
// //     }
// //   } else {
// //     flag = 1; // Not prime for numbers <= 1
// //   }

// //   // If the number is prime and not zeroed out
  
// //   if (flag === 0 && arr[i] !== 0) {
// //     console.log(arr[i], " - ", b);
// //   }
// // }

// // ===============================================================================



// /*
//  console.log(null === undefined); == true , === false


//  map:-

//  - map() returns a new array, you can chain other array methods 
//    like filter(), reduce(), or even another map().

//  const numbers = [1, 2, 3, 4];
//  const doubled = numbers.map(num => num * 2);

//  console.log(doubled); // [2, 4, 6, 8]
//  console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)


// forEach:-

//   - forEach() returns undefined, chaining is not possible. 

//  const numbers = [1, 2, 3, 4];
//  numbers.forEach(num => {
//    console.log(num * 2);
//  });

//  // Output:
//  // 2
//  // 4
//  // 6
//  // 8

//  console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)

//  // Converting a string to an array:-

//  Array.From() :-
 
//  const str = "hello";
//  const arr = Array.from(str);
//  console.log(arr); // ['h', 'e', 'l', 'l', 'o'];

//  array.every();

//   // Check if all elements are greater than 10

//   const numbers = [12, 15, 18, 21];
//   const allAboveTen = numbers.every(num => num > 10);
//   console.log(allAboveTen); // true
// ----------------------------
//   // Check if all elements are even
//   const allEven = numbers.every(num => num % 2 === 0);
//   console.log(allEven); // false


//   array.some():-

//  // Check if at least one element is greater than 10
//  const numbers = [2, 5, 8, 11];
//  const hasAboveTen = numbers.some(num => num > 10);
//  console.log(hasAboveTen); // true
// ---------------------------
//  // Check if any element is a negative number
//  const hasNegative = numbers.some(num => num < 0);
//  console.log(hasNegative); // false


//  set intervell , set timeout , clear intervell


//  let s=setInterval(() => {
//    console.log("hai");
  
//  }, 1000);

//  setTimeout(() => {
//    clearInterval(s)
//  }, 10000);

//  setTimeout(() => {
//    console.log("set time out");
  
//  }, 5000);



//  sum of array :


// let arr = [1,2,3,4,5,1];
// let sum = 0;
// arr.forEach(value => {

//    sum += value 

// });
// console.log("foreEach : ",sum);

// // ----------

// let add = arr.reduce((value,total)=> value+total);

// console.log("reduce   : ",add);

// // ----------

// let sum1 = 0;
// for (let i = 0; i < arr.length; i++) {

//     sum1 += arr[i]
// }
// console.log("normal forloop : ",sum);

// // -----------

// let arr1 = []; 
// let sum2 = 0;
// let map = arr.map((value)=> {
//     sum2 += value 
//     arr1.push(sum2)
// });
// console.log("map:",arr1);

// // --------


// let sum3 = 0;
// let i = 0;
// while (i < arr.length) {
//   sum3 += arr[i];
//   i++
// }
// console.log("while : ",sum3);

// // -----------

// let sum4 = 0;
// let i1 =0;
// do {
//   sum4 += arr[i1]
//   i1++

  
// } while (i1 < arr.length);
// console.log("do while : ", sum4);



// */


// // --------------------------------------------


// // duplicates

// // let arr=[1,2,3,4,5,2,3,4,13];

// // let dup1 = [...new Set(arr)]
// // console.log("set    :",dup1);

// // // --------------

// // let dup2 = arr.filter((value,index,array)=> array.indexOf(value) == index);
// // console.log("filter :",dup2);

// // // ---------------

// // // let arr4 = [];
// // let dup3 = arr.reduce((acc,value,index,array)=>{
// //   if (array.indexOf(value) == index) {
// //          acc.push(value);

// //   }
// //   return acc
// // },[])
// // console.log("reduce :",dup3);

// // ---------------

// // let dup = []
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = i+1; j < arr.length; j++) {
// //      if (arr[i] == arr[j]) {
// //         for (let k = j; k < arr.length-1; k++) {
// //           arr[k] = arr[k+1]
// //         }
// //      }
    
// //   }
  
// // }
// // console.log('mannual :',dup);

// //  let arr=[1,2,3,4,5,2,3,4]

// // for(let i=0;i<arr.length-1;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //         if(arr[i]==arr[j]){
// //             for(let k=j;k<arr.length-1;k++){
// //                 arr[k]=arr[k+1]

// //             }
// //             j--
// //             arr.length--
// //         }
// //     }
// // }
// // console.log(arr);




// // let lar = arr.reduce((acc,value)=> {
// //   if (value % 2 == 1 && acc < value) {
// //       acc = value; 
// //     }
// //     return acc    
// // },Number.MIN_SAFE_INTEGER)

// // console.log("reduce odd largest : ",lar);



//   // Check for prime number




// // prime count
// // -----------------
// // let arr = [2,11,5, 3, 7, 4, 5, 6, 7,11, 7];

// // for (let i = 0; i < arr.length; i++) {
// //   let b = 1;
// //   let flag = 0; 

// //   for (let k = i + 1; k < arr.length; k++) {
// //     if (arr[i] === arr[k]) {
// //       arr[k] = 0;
// //       b++; 
// //     }
// //   }

// //   // Check for prime number

// //   if (arr[i] > 1) { 
// //     for (let j = 2; j < arr[i]; j++) {
// //       if (arr[i] % j === 0) {
// //         flag = 1; 
// //         break;
// //       }
// //     }
// //   } else {
// //     flag = 1; 
// //   }
  
// //   if (flag === 0 && arr[i] !== 0) {
// //     console.log(arr[i], " - ", b);
// //   }
// // }



// // thankan code 

// // let arr = [2, 3, 7, 4, 5, 6, 7, 7];

// // let uniq = [...new Set(arr)]

// // for(i=0;i< uniq.length;i++){
// //     let flag = 0;
// //     for(j=2;j<uniq[i];j++){
// //         if(uniq[i] % j == 0){
// //             flag = 1
// //         }
// //     }
// //     if(flag == 0){
// //         let count = 1
// //        for(k=0; k< arr.length;k++){
// //            if(uniq[i] == arr[k] ){
// //                     count++   
// //            }
// //        }
// //         console.log("the prime number :"+uniq[i] +"-" + count)
// //     }
// // }



// // fist second third largest

// // let arr = [3,5,8, 7,7,6, 7,1,10, 7];

// // let f = 0;
// // let s = 0;
// // let th = 0;

// // for(i=0;i<arr.length;i++){
// //     if(arr[i] > f){
// //         th = s
// //         s = f;
// //         f = arr[i]
// //     }else if(arr[i] > s && arr[i] != f){
// //         th = s;
// //         s = arr[i]
        
// //     }else if(arr[i] >th && arr[i] != s ){
// //         th = arr[i]
// //     }
// // }
// // console.log(f,s,th)


// // let arr = [1,2,34,4,5,56,6,5,63];

// // let result = arr.reduce((acc,value)=>{
// //       if (value % 2 == 1 && acc < value) {
// //             acc = value 
// //       }
// //       return acc
// // },Number.MIN_SAFE_INTEGER)

// // console.log(result);


// // let express = require('express')
// // let app = express()

// // app.post('/sample',(req,res)=>{
// //        let body = req.body
// //     console.log(body);
    
// // })

// // app.get('/sample',(req,res)=>{
// //       res.send('sample')
// //      let q= req.query.hello
// //       console.log(q);
      
// // })



// // app.listen(5000,()=>{
// //   console.log('running');
  
// // })






// // class sample {
//   // constructor(name,age){
//   //  
//     // this.name = name;
//     // this.age = age;
//     // 
//   // }
//   //  hai() {
//     // console.log(this.name,this.age);
//     // 
//     // 
//   // }
// // }
// // 
// // let s = new sample('name',20)
// // s.hai()

// // let a = 20;

// // let a1 = new Promise((resolve,reject)=>{
// //       if (a>0) {
// //         resolve("good")
// //       }else{
// //         reject('fbhjknklml;,')
// //       }
// // })

// // Promise.allSettled([a1]).then((result)=>{
// //   console.log(result);
  
// // })




// // let n =  function* () {
// //   console.log("haui");
// //  yield
// //  console.log("hhh");
// //   yield 
// // }

// // let d = n()

// // d.next()
// // d.next()
// // d.next()


// // const pal='malayalam'
// // let flag=0
// // for(let i=0;i<pal.length;i++){
// //     if(pal[i]!=pal[pal.length-i-1]){
// //         flag=1;
// //         break
// //     }
// // }
// // if(flag==0){
// //     console.log('palindrome')
// // }else{
// //     console.log('not palindrome')
// // }




// // if( null === undefined){
//   // console.log("true");
//   // 
// // }else{
//   // console.log("false");
//   // 
// // }


// // function greet(name, callback) {
// //   console.log("Hello, " + name + "!");
// //   callback();
// // }

// // function sayGoodbye() {
// //   console.log("Goodbye!");
// // }

// // greet("Alice", sayGoodbye);


// // function doTask1(callback) {
// //   console.log("hai");
// //   callback()
// // }

// // function doTask2(callback) {
// //   console.log("hai2");
// //   callback()

// // }

// // function doTask3(callback) {
// //   console.log("hai3");
// //   callback()

// // }

// // function startTasks() {
// //   doTask1(() => {
// //     doTask2(() => {
// //       doTask3(() => {
// //         console.log("All tasks complete");
// //       });
// //     });
// //   });
// // }

// // startTasks();

// // -----------------------------------------------------------------


// // let arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// // let l

// //  for (let i = 0; i < arr.length; i++) {
// //   let flag = 0
// //    for (let j = 2; j < arr[i]; j++) {
// //       if (arr[i] % j == 0) {
// //         flag = 1
// //       }
    
// //    }
// //    if (flag == 0) {
// //     for (let k = i; k < arr.length; k++) {
// //       if (arr[k]%arr[i] == 0) {
// //         for ( l = k; l < arr.length; l++) {
// //           arr[l] = arr[l+1]
          
// //         }
// //         l--;
// //       arr.length--
// //       }
      
// //     }
// //    }
 
  
// //    }
 
// //  console.log(arr);
 





// // let express = require('express')
// // let app = express()

// // app.post('/sample',(req,res)=>{
// //        let body = req.body
// //     console.log(body);
    
// // })

// // app.get('/sample',(req,res)=>{
// //       res.send('sample')
// //      let q= req.query.hello
// //       console.log(q);
      
// // })



// let arr = [2, 3, 7, 4, 5, 6, 7, 7];

// let uniq = [...new Set(arr)]

// for(i=0;i< uniq.length;i++){
//     let flag = 0;
//     for(j=2;j<uniq[i];j++){
//         if(uniq[i] % j == 0){
//             flag = 1
//         }
//     }
//     if(flag == 0){
//         let count = 0
//        for(k=0; k< arr.length;k++){
//            if(uniq[i] == arr[k] ){
//                     count++   
//            }
//        }
//         console.log("the prime number :"+uniq[i] +"-" + count)
//     }
// }




let arr=[
  {
  a:1,
  b:2,
  }, {
    a:3,
    b:4,
    }, {
      a:5,
      b:6,
      }
]
sum=0
for(let i in arr){
  console.log(sum+=arr[i].a)
  
}
console.log(sum);
