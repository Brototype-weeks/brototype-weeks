// function sdf(args){
//     console.log(args);
// }
// sdf(ar)

// let obj={
//     name:'muuu',
//     address:{
//         city:'kauur'
//     }
// }

// let ovbj={...obj}

// ovbj.address.city ='rweiry';
// console.log(obj.address.city);

// let arr=[
//     {hh:2,ff:3},
//     {hh:8,ff:5},
//     {hh:7,ff:2},
// ]
// let arr1 =[]; 
// for(let obj of arr ){
  //  arr1.push(obj.ff+obj.hh);
// }
// // console.log(arr1);

// let reault = arr1.reduce((total,item)=>{
//     return total+item;
// },0)
// console.log(reault);

// let arr1 = [11,2,60,1,22,24,12,15,53,56];-

// arr1.sort((a,b)=>a-b);
// console.log(arr1);
// console.log("largest : " + arr1[arr1.length-3]);

//  odd  = arr1.filter((value)=>value % 2==1)

//     console.log(odd);

//  double = arr1.map((value)=> value * 2)
//  console.log(double);

// reduce = arr1.reduce((total,value)=> total + value)

// console.log(reduce);

// callback function

// console.log('start');

//     setTimeout(() => {
//     console.log('end');
//     }, 1000);

// console.log(getData());

// let numbers = [13,3,4,5,45,6,43,45,65];
// let result;
// let smallest = Math.max(...array)
// console.log(smallest);
// let multy = array.map(value=> value*smallest)
// console.log(smallest);
// console.log(multy);

// let minValue = numbers.reduce((min, current) => (current > min ? current : min));

// console.log('Smallest Value:', minValue);

// let smallest = numbers[0];

// smalles manual

// for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < smallest ) {
//             smallest=numbers[i];
//         }

// }
// console.log("smallest number "+ smallest);

// for (let j = 0; j < numbers.length; j++) {
//           numbers[j]=smallest*numbers[j];
// }
// console.log(numbers);

// let arr=[
//     {hh:2,ff:3},
//     {hh:8,ff:5},
//     {hh:7,ff:2},
// ];

// let sum = arr.reduce((acc,value)=>{
//     acc +=value.hh
// return acc
// })
// console.log(sum);

// let sum= 0;
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].hh +arr[i].ff;

// }
// console.log(sum);

// arr.forEach((value) => {
//     sum += value.hh+value.ff

// });
// console.log(sum);

//    let arr1 = [];
//       arr1.push(arr.hh+arr.ff)
//       for (let arr1 of arr) {
//       console.log(arr1);

//       }
//  let  result = arr1.reduce((total,item)=>total+item,0);
// console.log(result);

// setTimeout(()=>{
//     console.log("hai");
// },5000)

// let array = [1,25,15,30,3,6,9,4,20,7] ;
// let array1 = [2,3,4,[3,7,4]]
// let array2 = array + array1;
// let array2 = [...array,...array1];

//  console.log(array2);

//  function name1(num,num1,num2) {
//     console.log(num,num1,num2);
//  }

// name1(...array1)
//  let deep = JSON.parse(JSON.stringify(array1));
//  deep[3[0]]=1;
//  console.log(deep);

// map

//    array1.forEach((value)=> value = 2);

//  console.log(value);

// sort

//   array1.sort((a,b)=> b-a);
//  console.log(array1);
//  console.log(array1[array1.length-2]);

// let largest=Number.MIN_SAFE_INTEGER
// let seclargest=Number.MIN_SAFE_INTEGER

// for(let i=0;i<array1.length;i++){
//     if(array1[i]>largest){
//         seclargest=largest;
//         largest=array1[i];
//     }else if(array1[i]>seclargest&&array1[i]!=largest){
//         seclargest=array1[i];
//     }
// }
// console.log(seclargest);

// foreach

// array1.forEach((value,index,array) => array[index] = value * 2);

// console.log(array1);

// for (let i = 0; i < arr.length; i++) {
//     let count=0;
//         for (let j = 0; j < arr.length; j++) {
//             if (i != j) {
//                 if (arr[i] == arr[j]) {
//                     count++;

//                 }
//             }

//         }
//         if (count == 0) {
//             console.log(arr[i]);

//         }
// }

// let array1 = [2,1,55,1,43,4,45,7,5,7,4];

// function divide(num1,num2) {
//     let sum = new Promise((resolve,reject)=> {
//         if (num2 == 0) {
//             reject("math error")
//         }else{
//             resolve(num1/num2)
//         }
//     })
//     return sum;
// }

// let pr= divide(25,0).then((res)=>{
//     console.log(res);
// })
// pr.catch((err)=>{
//     console.log(err);
// })

// const prom1 = Promise.reject(0);
// const prom2 = new Promise((resolve)=> setTimeout(resolve,100,"quick"))
// const prom3 = new Promise((resolve)=> setTimeout(resolve,100,"hai"))

// Promise.any([prom1,prom2,prom3]).then(value=> console.log(value));

// function divide(num1,num2) {
//     let sum = new Promise((resolve,reject)=>{
//         if (num1==0) {
//             reject("math error");
//         }else{
//             resolve(num1/num2)
//         }
//     })
//     return sum
// }

// let p = divide(10,2).then((res)=>{
//     console.log(res);
// })
// p.catch((err)=>{
//     console.log(err);
// })

// setTimeout(() => {
//     console.log("hai");
// }, 5000);

// setInterval(() => {
//     console.log("hai");
// }, 3000);

// let array3 = [1,2,3,4,55,6,67,];

// array3.forEach((value,index,array)=>{
//     console.log(array[index]);
// })

// let obj = {
//     name : "first",
//     age  : 20
// }

// for(let i in obj){
//     console.log(name);
// }

// let arr = [ 1,23,34,4]

// for(let i in arr){
//     console.log(i);
// }

// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();
//   }

//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }

//   greet('Alice', sayGoodbye);

//   // Output:
//   // Hello Alice
//   // Goodbye!

// function name1(name, callback) {
//     console.log("hai" +" "+ name);
//     callback();
// }
// function name2() {
//     console.log("done");
// }
// name1("shibin",name2)

// const numbers = [5, 6, 2, 3, 7];

// const result = Math.max(numbers)
// console.log(result);

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((index,fruits)=>{
// console.log(index+":" + fruits);
// })

// const person = {
//     name: 'Alice',
//     age: 25,
//     city: 'New York'
//   };

//   for(let i in person){
//     console.log(i + person[i]);
//   }

// const fruits = ['apple', 'banana', 'cherry'];
// const name = 'Alice';
// for(let char of name){
//     console.log(char);
// }

// name1(...array1)
//  let deep = JSON.parse(JSON.stringify(array1));
//  deep[3[0]]=1;
//  console.log(deep);

// const original = {
//     name: 'Alice',
//     age: 25,
//     address: {
//       city: 'Wonderland',
//       zip: '12345'
//     }
//   };

//   const deepCopy = JSON.parse(JSON.stringify(original));

//   deepCopy.address.city = 'New Wonderland';
//   console.log(original.address.city); // Output: 'Wonderland'
//   console.log(deepCopy.address.city); // Output: 'New Wonderland'

// let array = [1, 2, 3, 4, 5];
// array.splice( 2,0,'a', 'b', 'c');

// console.log(array); // Output: [1, 2, 'a', 'b', 'c', 3, 4, 5]

// ---------------------------------------------------------

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// ------sum----------
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,6));

// -----------function---------
// const name=()=>{
//     console.log("rahul");
// }
// name();

//  let array = [1, 2, 3, 4, 5, 6, 6];
// even number
// let array1 = array.filter((value)=> value % 2== 0 );
// console.log(array1)

// total sum
//  let array1 = array.reduce((total,value)=> total+value,0)
//  console.log(array1);

// let obj1={ a: 1, b: 2, d: 3 };
// let obj2={ b: 3, c: 4 };

// let merge = {...obj1,...obj2};
//  console.log(merge);

// let string = "mashahir";

//     let str1 =" ";
//     for (let i = string.length-1; i >= 0; i--) {
//         str1 += string[i];

//     }
//     console.log(str1);

// function multi(){
//     let table = 5
//    for (let i = 1; i <= 10; i++) {
//            for (let j = i; j <= 10; j++) {
//                 console.log( j +" * " + table  + " : " + table*j );

//            }
//     return table;
//    }
//  }
//  result = multi();
//  console.log(result);

// ---------------------------------------------------------

/**  
 * variables, constants

     var,let,const

     variables are used store data values.
     
     var : 

     its function scoped it is accessable in functions declared.
     it is declared otside a function,it is globaly accessed.
        eg :  
         var name1 = "rahul";
         console.log(name1);

     Hoisting : 

     it is declared hoisted to the top of scope.it is accessable before declared,
     then initialized with 'undifined'.
        eg :

     let :

     scope - it is block scope,it is acceble with the block it is declared.
     hoisting - it is not accessed , result is 'reference error'.
     redeclaration - variable declared with 'let', cannot be redeclared in same scope.    
        eg :
         let age = 20;
         console.log(age); // 20

         age = 25;
         console.log(age); // 25
         
     const :

     scope - const is block scope similar to 'let'.  
     hoisting - 'ReferenceError'.
     redeclaration- variale declared cannot be redeclred in same scope.
     assignment - varible mustbe initialized at the time of cannot be re-assigned,
                 then contens and object and arrays declared with const can be modified.
                 
     LOOPs :

     for in : 
      it is usinng iterate object properties.

        for(key in object){
        // code block
        }
        key - it is a variable in each iteration.
        object - iterating property. 
        eg :
          let person ={
        name : "john",
        age  : 20,
        city : "new york"  
        };

        for(i in person){
             console.log(i+":"+person[i]);
        }


    string and methodes:

    let singleQuoteString = 'Hello, world!';
    let doubleQuoteString = "Hello, world!";
    let templateLiteralString = `Hello, world!`;

    methodes :
    1- .length
    2- .charAt(index)
    3- .charCodeAt(index)
    4- .concat(string)
    5- .includes(searchString,position)
    6- .indexOf(searchValue, fromIndex)
    7- .lastIndexOf(searchValue, fromIndex)
    8- .slice(startIndex, endIndex)
    9- .toLowerCase()
    10- .toUpperCase()
    11- .trim()
    12- .split(separator, limit)
    13- .replace(searchValue, newValue)
    14- .match(regex)
    15- .search(regex)
    16-  Template Literals
    17-  Multi-line Strings

    - .length
        eg : 
          let str = "Hello, world!";
            console.log(str.length); // 13

    - .charAt(index)
        eg : 
             let str = "Hello, world!";
                console.log(str.charAt(0)); // H

    - .charCodeAt(index)
        eg : 
            let str = "Hello, world!";
              console.log(str.charCodeAt(0)); // 72

    - .concat(string)
        eg : 
              let str1 = "Hello, ";
              let str2 = "world!";
              let str3 = str1.concat(str2);
                console.log(str3); // Hello, world!

    - .includes(searchString,position)
        eg :
          let str1 = "Hello, world";
            console.log(str1.includes("Hello")); // true

    - .indexOf(searchValue, fromIndex)
        eg :
             let str1 = "Hello, world";
                 console.log(str1.indexOf("world")); // 7

    - .lastIndexOf(searchValue, fromIndex)
        eg : 
            let str1 = "Hello, world";
                console.log(str1.lastIndexOf("d")) // 11

    - .slice(startIndex, endIndex)
        eg :
            let str1 = "Hello, world";
                console.log(str1.slice(0,7)); // Hello,

    - .toLowerCase()
        eg : 
             let str1 = "HELLOW, WORLD";
                console.log(str1.toLowerCase()); // hello, world

    - .toUpperCase()
        eg : 
            let str1 = "hello, world";
                console.log(str1.toUpperCase());// HELLO< WORLD

    - .trim()
        eg :
              let str1 = "  hello,world";
                console.log(str1.trim()); //hello,world (remove space)

    - .split(separator, limit)
        eg : 
                let str1 = "hello,  world";
                    console.log(str1.split(","));//[ 'hello', '  world' ](split string into array)

    - .replace(searchValue, newValue)
        eg : 
             let str1 = "hello,  world";
                console.log(str1.replace("world"," javascript"));//hello,   javascript

    - .match(regex)
        eg : 
            let str = "The rain in SPAIN stays mainly in the plain";
            let result= str.match(/ain/g);
                console.log(result);//[ 'ain', 'ain', 'ain' ]
    - .search(regex)
        eg : 
            let str = "hello, world";
            let result= str.search("world");
                console.log(result);//7

    -  Template Literals
        eg :
            let str = " world";
            let result = `Hello, ${str}`;
                console.log(result);//Hello,  world

    -  Multi-line Strings
        eg : 
            let str = ` This is a
            multi-line string.`;
                console.log(str);//  This is a multi-line string.
     
    ARRAY METHODES :

    1- .length
    2- .push()
    3- .pop()
    4- .shift()
    5- .unshift()
    6- .concate()
    7- .slice(start,end)
    8- .splice(start,delet count,item)
    9-  forEach(callback)
    10- .map(callback)
    11- .filter(callback)
    12- .reduce(callback,initialValue)
    13- .find(callback)
    14- .findindex(callback)
    15- .sort(compare function)
    16- .reverse()
    17- .from()

    - .length
        eg :
            let array = [1,2,3,4,5,6];
                console.log(array.length); //6

    - .push()
        eg : 
             let array = [1,2,3,4,5,6];
             let result = array.push(7,8,9)
                console.log(array);// 1, 2, 3, 4, 5, 6, 7, 8, 9  

    - .pop()
        eg :
              let array = [1,2,3,4,5,6];
              let result = array.pop();
                console.log(array); //[ 1, 2, 3, 4, 5 ]

    - .shift()
        eg :
             let array = [1,2,3,4,5,6];
             let result = array.shift();
                console.log(array);//[ 2, 3, 4, 5, 6 ]

    - .unshift()
        eg :
              let array = [1,2,3,4,5,6];
              let result = array.unshift(0,1);
                console.log(array);//[ 0, 1, 1, 2, 3, 4, 5, 6 ]

    - .concate()
        eg : 
             let array = [1,2,3,4,5,6];
             let array1 = ['a','b','c','d']; 
             let result = array.concat(array1);
                console.log(result);//[ 1, 2,   3,   4,   5, 6, 'a', 'b', 'c', 'd' ]

    - .slice(start,end)
        eg : 
                let array = [1,2,3,4,5,6];
                let result = array.slice(1,5);
                    console.log(result); // [ 2, 3, 4, 5 ]

    - .splice(start,delet count,item)
        eg :
                let array = [1,2,3,4,5,6];
                let result = array.splice(0,4,"A");
                    console.log(result); //[ 'A', 5, 6 ]
    
    -  forEach(callback)
        eg :
            
                 let array = [1,2,3,4,5,6];
    
                array.forEach((value,index,array)=>{
                    console.log(value);// 1
                                          2
                                          3
                                          4
                                          5
                                          6
        })

    - .map(callback)
        eg : 
        (1)  let array = [1,2,3,4,5,6];
    
            let result = array.map((values)=>values*2);
               console.log(result);  // [ 2, 4, 6, 8, 10, 12 ]
        ===================
        (2) let array1 = ['a','b','c','d']; 

            let array2 = array1.map((value)=>value.toUpperCase())
                console.log(array2);   

    - .filter(callback)
        eg :
        (1)  let array = [1,2,3,4,5,6];
             let array1 = array.filter((value)=> value%2 == 1);
                 console.log(array1); // [ 1, 3, 5 ] (odd Numbers)
        ===================
        (2)     let array = [1,2,3,4,4,3,5,6,6];
                let array1 = array.filter((value,index,self)=>self.indexOf(value)== index);
                    console.log(array1);// [ 1, 2, 3, 4, 5, 6 ]
    
    - .reduce(callback,initialValue)
        eg : 
        (1)  let array = [1, 2, 3, 4, 4, 3, 5, 6, 6];
             let array1= array.reduce((total,value)=>total+value);
             console.log(array1); //34 (total sum of array)

        ===================
        (2) let array = [1, 2, 3, 4, 4, 3, 5, 6, 6];
            let array1 = array
            .filter((value, index, array) => array.indexOf(value) == index)
            .reduce((total, value)=> total+value);
                console.log(array1); //21 (dublicate number sum)

    - .find(callback)
        eg : 
            let array = [12,3,4,66,78,99];
            let array1= array.find(value=> value > 78 )
                console.log(array1); // 99

    - .findindex(callback)
        eg :
            let array = [12,3,4,66,78,99];
            let array1= array.findIndex(value => value >78 )
                console.log(array1);//5 (position of array number)

    - .sort(compare function)
        eg :
            let array = [12,3,4,66,99,78];
            let array1= array.sort((a,b)=> a-b )
                console.log(array1);//[ 3, 4, 12, 66, 78, 99 ] (accenting oder)


    - .reverse()
        eg :
            let array = [5,4,3,2,1];
            let array1 = array.reverse();
                console.log(array1);//  [ 1, 2, 3, 4, 5 ] (array revers)

    MATH :
    math is object. it methodes are used methematical tasks.'math' is commenly used in all methodes.
    
    METHODES :

    1- .abs()
    2- .ceil()
    3- .floor()
    4- .round()
    5- .max()
    6- .min()
    7- .random()
    8- .sqrt()
    9- .pow()
    10- .trunc()


    
    1- .abs()  (absolute)
        eg :
                let number = -10;
                let num1 = Math.abs(number)
                    console.log(num1); // 10 (abs is analyse absolute value)

    2- .ceil()
        eg :
             let number = 10.5;
             let num1 = Math.ceil(number)
                console.log(num1); // 11 ( find next number )

    3- .floor()
        eg :
                let number = 10.5;
                let num1 = Math.floor(number)
                    console.log(num1);//10 ( find 1st nearest integer)

    4- .round()
        eg : 
             let number = 4.5;
                console.log(Math.round(number));//5 ( next nearest integer)

    5- .max()
        eg : 
            let number = Math.max(1,2,3,45);
                console.log(number);// 45

    6- .min()
        eg : 
             let number = Math.min(1,2,3,45);
                console.log(number);// 1

    7- .random()
        eg : 
              let number = Math.random();
                console.log(number);//0.06683010619047125

    8- .sqrt()
        eg : 
          let number = 16;
          let sqr = Math.sqrt(number);
            console.log(sqr);//4
    
    9- .pow()   (power)
        eg :
            let base = 2;
            let exponent = 3;
            let power = Math.pow(base,exponent);
                console.log(power);//8 

    10- .trunc()
        eg :
            let number = 4.9;
    let truncated = Math.trunc(number)
    console.log(truncated);//4 (remove a fractional digit )

    DATE :
     let date = new Date();

    console.log(date.getDate()); // Day of the month (e.g., 25)
    console.log(date.getMonth()); // Month (e.g., 5 for June)
    console.log(date.getFullYear()); // Full year (e.g., 2024)
    console.log(date.getHours()); // Hours (e.g., 15 for 3 PM)
    console.log(date.getMinutes()); // Minutes (e.g., 30)
    console.log(date.getSeconds()); // Seconds (e.g., 45)
    console.log(date.getDay()); // Day of the week (e.g., 1 for Monday)



    OPERATIONS(Arithmatic,assignment,logical,comparison,bitwise,ternary)

    Arithmatic      Assignment      Comparison      Logical     Bitwise     Ternary      
    +               =               ==              &&          &           ?     
    -               -=              ===             ||          |           :         
    *               *=              !=              !           ^                  
    /               /=              !===                        ~               
    %               %=              >=                          <<
                    +=              <=                          >>
                                                                >>>  
                                                                
                                                                
    EVENTS :


    Events in JavaScript are actions or occurrences that happen in the browser,
    triggered by user interactions or by the browser itself.Handling events allows
     developers to create interactive and responsive web applications.Here's 
    an overview of how events work and how to handle them in JavaScript.


    (1) Select the Element: getElementById, querySelector
    (2) Attach an Event Listener: Use the addEventListener()
    (3) Define the Event Handler: write that function specific happend event

    common event :

    Mouse Events:    click, mouseover, mouseout, mousemove, etc.
    Keyboard Events: keydown, keyup, keypress
    Form Events:     submit, change, input, focus, blur
    Window Events:   load, resize, scroll, unload



    FUNCTIONS :

    In JavaScript, functions are blocks of reusable code designed to perform a 
    specific task or calculate a value. 


    1. Function Declaration
    2. Function Expression
    3. Arrow Function
    4. Function Parameters and arguments
    5. Return Statement
    6. Function Scope
    7. Function Hoisting
    8. Callback Functions
    9. Immediately Invoked Function Expressions (IIFE)
    10. Built-in Functions



    1. Function Declaration
        eg :
            function sample(Parameter1,Parameter2,..){
                   //function body
                   //code to be exicute
                }
        ===================
             function sample(name1){
                //function body
                console.log(`HELLO , ${name1}`);
                //code to be exicute
            }
            sample("john");//HELLO , john           

    2. Function Expression
        eg :
            let functionName = function(Parameter1,Parameter2,..){
                    //function body
                   //code to be exicute
            } 
        ===================
              let sample = function(name){
                    //function body
                    console.log(`hai, ${name}`);
                   //code to be exicute
             } 
            sample("john");// hai, john
        
    3. Arrow Function
        eg : 
             let FunctionName=(Parameter1,Parameter2,..)=>{
                     // Function body
                    // Code to be executed
        }
        ===================
            let sample = (name)=>{
        console.log(`hello,${name}`);
        }
        sample('norulameen');

    4. Function Parameters and arguments
        eg:
             function sampleAdd(a,b){
                return a+b;
             }
             let result = sampleAdd(1,2);
             console.log(result);

    5. Return Statement
        eg :
            function samplemulti(a,b) {
        return a*b;
        }
        let result = samplemulti(5,5);
            console.log(result); // 25

    6. Function Scope
        eg : 
             let globalVariable = "global";

             function sample(){
             let localvariable = "local";
             console.log(globalVariable);
             console.log(localvariable);
        }
        sample();

        console.log(globalVariable);
        console.log(localvariable); //not accessble this log

    7. Function Hoisting
        eg :
                sample("Ameen"); //function call before decleration

                function sample(name){
                console.log(`hello,${name}`);
                }// hello,Ameen

    8. Callback Functions
    Asynchronous Operations: They allow code to run after a task is completed, 
    such as fetching data from a server or reading a file.
        eg :
              function sample(callback){
                console.log("processing..");
                callback();
                // setTimeout(callback,2000)
            }
              function done(){
                console.log("processing completed");
            }
             sample(done);

    9. Immediately Invoked Function Expressions (IIFE)
    - it is immediatly runs and define function
    - It encapsulates variables and functions, 
       preventing them from polluting the global scope.
    -It is useful for initialization and avoiding conflicts in 
      larger programs or when combining scripts.

        eg :
            (function() {
                // IIFE body
            })();
            ===================
            (function ( ) {
            var config ={
                apiKey : "12234",
                apiUrl : "https://api.example.com"
            }    
            function initialization(){
                console.log("initialize with config :" ,config);
            }

            initialization();

            })();

    10. Built-in Functions
    JavaScript provides many built-in functions like parseInt(), setTimeout(), Math.random(), etc.,
     which perform specific tasks and calculations.

     let number = parseInt("10");
     console.log("type of the number :"+typeof(number),number);//type of the number :number 10


     ERROR HANDLEING  try,catch and finally.

        try     - The try block contains the code that you want to execute, which might throw an error.
                  the control is immediately transferred to the catch block.

        catch   - The catch block is executed if an error is thrown in the try block.
                  It receives the errorobject as a parameter, allowing you to access details about 
                  the error and handle it accordingly.  

        finally - The finally block is optional and contains code that will execute regardless of whether 
                  an error was thrown or caught. 
                  
                  eg : 
                    try {
                          // Code that may throw an error
                    } catch (error) {
                          // Code to handle the error
                    } finally {
                          // Code that will run regardless of an error being thrown
                        }

                    ===================

                    function divide(num1,num2){
                    try {
                        if (num2 == 0) {
                        throw new error("zero is not allowed!!");
                        }
                        let result = num1/num2;
                        console.log("Result :"+result);
                    }
                    catch(error){
                        console.log("it is :" + error.message);
                    }
                    finally {
                        console.log("execution completed");
                    }
                    }
                    divide(20,5);
                    divide(40,0);    


    ADVANCED JAVASCRIPT (ES6);
    
        -import and export module.

        -promise,async/await
            promise state: 
              - Pending:     Initial state, neither fulfilled nor rejected.
              - Fulfilled:   The operation completed successfully.
              - Rejected:    The operation failed

              eg :


                function sum(num1, num2) {
                 return new Promise((resolve, reject) => {
                      if (num2 == 0) {
                          reject("zero not possible");
                     } else {
                          resolve(num1 + num2);
                     }
                     });
                        }

                     function mul(data) {
                       return new Promise((resolve, reject) => {
                         console.log(data);
                         if (data > 0) {
                           resolve(data * 10);
                         } else {
                           reject("give a positive number");
                         }
                       });
                     }
                     function display(data) {
                       console.log(data);
                     }
                     async function exicute() {
                     let sumResult =await sum(10,10);
                     let mulResult = await mul(sumResult);
                     display(mulResult)
                     
                         try {
                           let sumResult =await sum(10,0);
                         let mulResult = await mul(sumResult);
                         display(mulResult)
                         } catch  (error){
                             console.log(error);
                     
                         }
                     }
                     exicute();
                     
                     sum(10, 10)
                       .then(mul)
                       .then(display)
                       .catch((error) => {
                         console.log(error);
                       })
                       .finally(() => {
                         console.log("completed");
                       });

    PROMISE METHIODES :
        -All
        -AllSettled
        -Race
        -Any

            eg :
                   let data = 20;
                      let promise1 = new Promise((resolve,reject)=>{
                                if (data >0) {
                                    resolve("success! 1")
                                }else{
                                    reject("enter a positive number")
                                }
                      })

                      let promise2 = new Promise((resolve,reject)=>{
                        if (data >10) {
                            resolve("success! 2")
                        }else{
                            reject("enter a greater them 10")
                        }
                    })
                    let promise3 = new Promise((resolve,reject)=>{
                        if (data >20) {
                            resolve("success! 3")
                        }else{
                            reject("enter a greater them 20")
                        }
                    })

                    Promise.all([promise1,promise2,promise3]).then((resul)=>{
                        console.log(resul);
                    })


    FOR OF METHOD :
        eg :
            const array = [10, 20, 30, 40];

            for (const value of array) {
                console.log(value);
            }
            
            // Output:
            // 10
            // 20
            // 30
            // 40
    DESTRUCTURE :
        eg :

     let a ="hai";
    let b ="haa";
    [a,b] = [b,a];
    console.log(a);
    console.log(b);
    //haa
      hai

    ------------------------------------------------------------------------------------
    
    // */

// ------------------------------------------------------------------------------------

// let array = [1,2,3,4,5];

// let result = array.map((value)=> value*2)
// let res = result.reduce((acc,val)=>{
//     if(val%2==0){
//         if(val > acc){
//             return val
//         }
//         return acc;
//     }
// },Number.MIN_SAFE_INTEGER)
// console.log(res);

// destracture

// let firstame = 'noor';
// let second = 'ameen';

//  [firstame,second]= [second,firstame]

// console.log(firstame);
// console.log(second);

//  let array = ['banana','banana','apple','orenge','apple','orenge'];

//  let nwearr = [...new Set(array)]
//  console.log(nwearr);

//  let arr = [null,'hello',6587,NaN,undefined];





//  let res = arr.filter((value,index)=> value !== null && value !== undefined );
//  console.log(res);

//      let arr =[45,3,78,433,87]

//     //  arr.sort((a,b)=>a-b)

//     //  console.log(arr[0]);

//  let after =arr.map((val) =>  val * arr[0])
// console.log(after);

// manual

// let arr =[45,3,78,433,87]
// let  smallest  = Number.MAX_SAFE_INTEGER;
// for(let i =0 ;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest = arr[i]
//     }
// }
// console.log(smallest);

// let array = [-1,-1,-4,-2,-3];
// // let array=[1,49,50,6,7,82,3,5];
// let hai=Number.MIN_SAFE_INTEGER;
// newArray=array.reduce((acc,value)=>{
//     if(value>hai){
//         acc=hai;
//         hai=value;
//     }else if(value>acc&&value!=hai){
//         acc=value;
//     }
//     return acc;

// })

// console.log(newArray);

// smalllest second smallest

// let array = [65,45,55,64,5,5,55,5];
// largest = Number.MAX_SAFE_INTEGER;
// let array1= array.reduce((acc,value)=>{

//     if (value < largest ) {
//         acc = largest;
//         largest = value;
//     }
//     if (value !==largest &&  value < acc ) {
//         acc = value;
//     }
//     return acc;
// },Number.MAX_SAFE_INTEGER)
// console.log("largest :"+largest);
// console.log("smallest :"+array1);

// let array1 = array.reduce((acc,value)=> {
//     if (value > acc) {
//         return value
//     }
//     return acc;
// },Number.MIN_SAFE_INTEGER)
// console.log(array1);

// largest second larest

// let array = [65,45,55,64,5,5,55,5,];

// let largest = Number.MIN_SAFE_INTEGER;
// let array1 = array.reduce((acc,value)=> {
//     if (value > largest) {
//         acc = largest;
//         largest = value;
//     }else if (value > acc && value != largest) {
//         acc = value;
//     }
//     return acc;
// },Number.MIN_SAFE_INTEGER)
// console.log(array1);
// console.log(largest);

// dublicate Elements

// let array = [65,45,55,64,5,55,5,];

// let dublicate = array.filter((value,index,array)=> array.indexOf(value) !== index);
// console.log(dublicate);

// let array = [65,45,55,64,5,55,5,];

// let result = array.reduce((acc,value,index,array)=>{
//     if ( array.indexOf(value) == index ) {
//         acc.push(value);
//     }
//     return acc;
// },[])

// console.log(result);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//  dublicates

//  const array = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
//  let array = [65,45,55,64,5,55,5,];

// let result = [...new Set(array)];

// let result = array.filter((values,index,array)=> array.indexOf(values)==index);

// let result = array.reduce((acc,Value)=>{
//     if (!acc.includes(Value)) {
//         acc.push(Value)
//     }
//     return acc;
// },[])

// let result = array.reduce((acc,Value,index,array)=>{
//     if ( array.indexOf(Value)==index ) {
//         acc.push(Value)
//     }
//     return acc;
// },[])

// let acc = [];
// array.forEach(values => {
//     if (!acc.includes(values)) {
//         acc.push(values)
//     }

// });
// let result = acc;

// let acc = [];
// for(let i of array){
//     if (!acc.includes(i)) {
//         acc.push(i)
//     }
// }
// let result = acc;
//  console.log(result);

// protottype

// const roadmap = {
//     getRoadmapUrl() {
//       console.log(`https://roadmap.sh/${this.slug}`);
//     },
//   };

//   const javascript = {
//     name: 'JavaScript Roadmap',
//     description: 'Learn JavaScript',
//     slug: 'javascript',
//     greet() {
//       console.log(`${this.name} - ${this.description}`);
//     },
//   };

//   Object.setPrototypeOf(javascript, roadmap); // or javascript.__proto__ = roadmap;

//   javascript.getRoadmapUrl(); // https://roadmap.sh/javascript
//   javascript.greet(); // JavaScript Roadmap - Learn JavaScript

//  shallow copy deep copy

// let obj1 = {
//     name : "noor",
//     age  : 20,
//     skill : {
//         html : "full",
//         css  : "half"
//     }
// }

// let copy = {...obj1};
// copy.skill.html=19;
// console.log(copy);
// console.log(obj1);

// let deep =JSON.parse(JSON.stringify(obj1));
// deep.skill.html = 18;
// console.log(deep);
// console.log(obj1);

// closure

// function sample() {
//     let x = "how are you";
//     function sample1() {
//         console.log(x);
//     }
//     return sample1;
//  }
// let closure=sample();
//  closure()

// promise

// function divide(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num2 == 0) {
//       reject("this is not valiable");
//     } else {
//       resolve(num1 / num2);
//     }
//   });
// }

// function sum(data) {
//   return new Promise((resolve, reject) => {
//     console.log(data);
//     resolve(data + data);
//   });
// }
// function display(data) {
//   console.log(data);
// }

// async function result() {
//     let divide1 = await divide(10,1);
//     let sum1    = await sum(divide1);
//    display(sum1)
// }
// async function result() {
// try {
//     let divide1 = await divide(10,1);
//     let sum1    = await sum(divide1);
//         display(sum1)
    
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("finished");
// }
// }
// result();
// divide(10, 1)
//   .then(sum)
//   .then(display)
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finished");
//   });



// methodes

// data =11;
//  promice1=new Promise((resolve,reject)=>{
//     if (data >11) {
//         resolve("success!!!(1)");
//     }else{
//         reject("not");
//     }
// });


//  promice2=new Promise((resolve,reject)=>{
//     if (data >10) {
//         resolve("success!!!(2)");
//     }else{
//         reject("not");
//     }
// });

// promice3=new Promise((resolve,reject)=>{
//     if (data >10) {
//         resolve("success!!!(3)");
//     }else{
//         reject("not");
//     }
// });


// Promise.any([promice1,promice2,promice3]).then((res)=>{
//     console.log(res);
// })

// type casting

// let  a =toString( 10);

// console.log(typeof(a));

// undefined

// let a= null;
// console.log(a); 


// default parameter

// function default1(parameter=1) {
//     console.log(parameter);

// }
// default1(parameter=2)


// reduce

// let array = [1,2,3,4,5]

// let result = array.reduce((acc,val)=> acc+val);
// console.log(result);


// setIntervel(()=>{
//     console.log("how are you");
// },5000)


// set interwell

// let a=setInterval(() => {
//     console.log("hai");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(a)
// },2000)



// iife

// (function a() {
//    let a=10;
//     function initialization1(a) {
//         console.log(a);

//     }

//     initialization1(a);
// })();



// hoisting

// console.log(x);
// var x= 10;

// set timeout
// setTimeout(()=>{
//     console.log("haaa");
// },2000)


// array.from


// let array = [1,2,3,4,5];

// let result = Array.from(array,val=>  val*2);
// console.log(result);

// pure function

// function sum(a,b) {
//     return a+b;
// }
// let result=sum(2,3);
// console.log(result);



// splice vs splice

// let array = [1,2,3,4,5];

// let result =array.slice(0,3);
// console.log(result);
// console.log(array);


// function curriying

// function currying(a) {
//   return  function(b) {
//     return    function(c) {
          
//             return a+b+c;
            
//         }
//     }
// }

// let a=currying(1)
// let b=a(1)
// let c=b(1)
// console.log(c);
// console.log(currying(1)(2)(3));

// post and pre increament

// let a = 10;
// let b = ++a;
// console.log(b); 

// arrow function

// let name =()=>{
//     console.log("hai");
// }
// name();

// spread and rest
//  let array = [1,2,3,4,5];
//  let [a,b,...rest] = array
//  let result = [a,...rest];
//  console.log(result); 



// generator function

// function* sample() {
//     yield(1);
//     yield(2);
//     yield(3);
// }

// const generator = sample();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());













//  1- dublicate
//  2- destructure
//  3- smallest
//  4- unique
//  5- second largest
//  6- second smallest
//  7- object sum
//  8- object two digit mumber
//  9- multiplication
//  10- even number then largest or smallest
//  11- object iteration
//  12- promice
//  13- callback


//  1- dublicate

// let array = [33,1,2,3,4,5,2,33];

// let dublicate = array.filter((value,index,array)=> array.indexOf(value)== index );
// console.log(dublicate);

// let dublicate = [...new Set(array)];
// console.log(dublicate);

// let dublicate = array.reduce((acc,value,index,array)=>{
//     if (array.indexOf(value) == index ) {
//         acc.push(value);
//     }
//     return acc;
// },[]);

// console.log(dublicate);


// let acc = [];

// for(let i of array){
//     if (!acc.includes(i)) {
//         acc.push(i);
//     }
    
// }
// console.log(acc);


// let acc = [];
// array.forEach(array => {
//     if (!acc.includes(array)) {
//         acc.push(array)
//     }
// });
// console.log(acc);


// let double = array.map((value)=> value*2);
// console.log(double);

// let acc = [];
// let dub = [];
// for( let i in array){
//     if (array.indexOf(array[i]) != i  && !dub.includes(array[i])) {
//         acc.push(array[i]);
//         dub.push(array[i]);
//     }
    
// }

// console.log(acc);
// console.log(dub);

// 2- destructure

// let name1 = "shibin";
// let second = "siyad";


// [name1,second] = [second,name1];

// console.log(name1);
// console.log(second);

// smallest, second

// let array = [33,1,2,3,4,5,2,33];
// let second = Number.MAX_SAFE_INTEGER;
// let small = array.reduce((acc,value)=>{
//     if (value < acc) {
//         second = acc;
//         acc = value;
//     } else if (value < second && value != acc) {
//         second =value;
//     }
//     return acc
// },Number.MAX_SAFE_INTEGER);

// console.log(small);
// console.log(second);


// largest second

//   let array = [12,2,5,54,12,11,11,56];
// let second = Number.MIN_SAFE_INTEGER;
//   let larest = array.reduce((acc,value)=>{
//     if (value > acc) {
//         second = acc;
//         acc = value
//     }else if (value > second && value != acc) {
//         second = value;
//     }
//     return acc;
//   },Number.MIN_SAFE_INTEGER);

//   console.log(larest);
//   console.log(second);


// let array = [ 1,2,3,"a","b"];

// let res = array.filter((value)=>!isNaN(value) &&  typeof value==='number' );
// console.log(res);


// function mul(a) {
    
//     for (let i = 1; i < 10; i++) {
//             console.log(i +" x "+ a+ "= "+a*i);
        
//     }
// }

// mul(10);


//  let array = [12,12,11,11];
// let result = array.join("").toString().split('');
// let sum = result.reduce((acc,value) => acc+Number(value),0);
// console.log(sum);
// console.log(result);



// let array = [1,2,3,4,5];


// let [large,second] = array.reduce(([large,second],value)=>{
//     if (value > large) {
//         return[value,large]
//     }else if (value > second && value != large) {
//         return[large,value]
//     }
//     return [large,value]
// },[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER])
// console.log(large);
// console.log(second);
// let [large,second] =array.reduce(([large,second],value)=>{
//     if (value > large) {
//         return [value,large]
//     }else if (value > second && value != large) {
//         return [large,value]
//     }
//     return [large,second];
// },[Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER])

// console.log(large);
// console.log(second);

// let [small,second] = array.reduce(([small,second],value)=>{
//         if (value < small) {
//             return [value,small];            
//         }else if (value < second && value != small) {
//             return [small,value]
//         }
//         return [small,value]
// },[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER])

// console.log(small);
// console.log(second);

// let obj = {
//     name : "student1",
//     getNmae(age, location){
//         console.log(`${this.name} - ${age} - ${location}`);
//     } 
// }

// const obj1 = {
//     name : "student2"
// }

// obj.getNmae.call(obj1,10,"kochi")
// obj.getNmae.apply(obj1,[11,"alapuzha"])

// let a = obj.getNmae.bind(obj1,10,"kochi")
// a()

// let stdent1 ={
//     name : "student1",
//     getname(){
//         console.log(this.name);
//     }
// }

// stdent1.getname.call(stdent1,)

// let arr = [1,2,3,4,"A","b"];

// let a = arr.filter((value)=> !isNaN(value));
// console.log(a);




// function sum(num1, num2) {
//     return new Promise((resolve, reject) => {
//          if (num2 == 0) {
//              reject("zero not possible");
//         } else {
//              resolve(num1 + num2);
//         }
//         });
//            }

//         function mul(data) {
//           return new Promise((resolve, reject) => {
//             console.log(data);
//             if (data > 0) {
//               resolve(data * 10);
//             } else {
//               reject("give a positive number");
//             }
//           });
//         }
//         function display(data) {
//           console.log(data);
//         }
        // async function exicute() {
        // let sumResult =await sum(10,10);
        // let mulResult = await mul(sumResult);
        // display(mulResult)
        
        //     try {
        //       let sumResult =await sum(10,0);
        //     let mulResult = await mul(sumResult);
        //     display(mulResult)
        //     } catch  (error){
        //         console.log(error);
        
        //     }
        // }
        // exicute();
        
        // sum(10, 10)
        //   .then(mul)
        //   .then(display)
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally(() => {
        //     console.log("completed");
        //   });


//         let array = [10,20,30,40,50];
//         // let array = [30,19,41,9,51];

//         let x = parseInt(array.length/2)
//         // console.log(array[x]);
//         let arr1 = [];  
//         arr1.push(array[x]);
//         console.log(arr1);
//         let a = 1;
//         for (let i = 0; i < 4; i++) {
//            if (x-a) {
//         arr1.push(array[i]-1);
//             a++;
//            }else if (x+a) {
//         arr1.push(array[i]+1);
//             a--;
//            }
            
//         }

// console.log(arr1);



        