// const http =  require('http');

// const server =http.createServer((req,res)=>{
//     res.end();
// })
// const port = process.env.port || 3000;

// server.listen(port)

// .listen(3000,()=>{
//     console.log("server running");
// }))

// express

// const express = require('express');

// const app = express();

// app.listen(3000)

// const fs = require('fs')
// function check(n){
//     return new Promise((resolve,reject)=>{
//         if(n%2==0){
//             resolve(n);
//         }else{
//             reject('its odd')
//         }
//     })
// }
// function display(n){
//     let muls =[];
//     for(let i=1;i<=10;i++){
//         muls.push(i*n)
//     }
//     fs.writeFile('new.text',JSON.stringify(muls),(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file created');
//     })
// }
// check(6).then(display).catch((mes)=>{console.log(mes)})

// ------------------------------------------------------------------------------------------------------

// ==========================================================
// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// app.set('view engine','hbs');
// app.set('views','./views');

// app.get('/',(req,res)=>{
//   res.render("home")
// })

// // app.use('*',(req,res)=>{
// //   res.status(404).send("path is not working")
// // })

// // Starting the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// ==========================================================

//  promise even multiplication

/* const fs = require('fs')
 let even=((num)=>{
       return new Promise((resolve,reject)=>{
         if (num%2 == 0) {
           resolve(num)
         }else{
           reject("odd")
         }
       })
 })
 function display(data) {
   // console.log(data);
   let arr = [];
   for (let i = 1; i <= 10; i++) {
           // console.log(i*data );
           arr.push(i*data)
   }
   fs.writeFile('text6.txt',JSON.stringify(arr),(err)=>{
     if (err) {
       console.log(err);
     }else{
       console.log("creat file");
     }
   })
 }
 even(4).then(display).then((req,res)=>{
   console.log(res);
 }).catch((err)=>{
   console.log(err);
 }

 */
/*
 wirte array read file sum 

 const fs = require('fs')
 const arr = [10,20,30,40]
 fs.writeFile('test8.txt',JSON.stringify(arr),(err)=>{
     if (err) {
       console.log(err);
     }else{
       console.log("created");
     }
 })


 fs.readFile('test8.txt','utf8',(err,data)=>{
   if (err) {
     console.log(err);
   }else{
     console.log(data);
   }
   let num = JSON.parse(data)
   let sum = num.reduce((acc,value)=> value + acc);
   console.log(sum);
 })
*/

/*
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.set('view engine','hbs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('home')
}) 

app.get('/:n1/:n2',(req,res)=>{
    let n1 = parseInt(req.params.n1);
    let n2 = parseInt(req.params.n2);
    let sum = n1+n2;
    res.send(`Sum : ${sum}`)
})




app.listen(3001,()=>{
    console.log("running");
})
*/

/*
// const  url = require('url')
let sample = 'http://www.w3schools.com'
let parse = new URL(sample)
let head = parse.hostname
console.log(head);
*/

/*



//Read and wrilte file

const fs = require('fs');

fs.readFile('test12.txt','utf8',(err,data)=>{
  if (err) {
    console.log(err);
  }else{
    console.log(data)
  }

  fs.writeFile('test100.txt',data,(err)=>{
    if (err) {
      console.log(err)
    }else{
      console.log("file created")
    }
  })
  
})

*/


// function err(req,res) {
//   if (err) {
//     console.log(err);
//   }
// }

// app.use(err)





// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// app.set('view engine','hbs');
// app.set('views','./views');

// app.get('/',(req,res)=>{
//     res.render('home')
// })




// app.listen(3001,()=>{
//     console.log("running");
// })

// ===============================================================

// const http = require('http')



// let server = http.createServer((req,res)=>{
//   res.end();
// })

// server.listen(3000, (err)=>{
//    console.log(err);
// });

//  let fs = require('fs');

// let data = fs.readFileSync('test8.txt','utf8')
// console.log(data);

// fs.unlink('test.txt',(err,data)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("delete")
//   }
// })


// const http = require('http')
// const express = require('express')
// const app = express()
// const server = http.createServer((req,res)=>{
//   res.end()
  
// })
// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// server.get('/:n1/:n2',(req,res)=>{
//     let n1 = parseInt(req.params.n1)
//     let n2 = parseInt(req.params.n2)

//     let sum = n1+n2;
    
//     res.send(`sum : ${sum}`)
// })

// server.listen(3008, ()=>{
//   console.log('running');
// })


// const  url = require('url')
// let sample = 'http://www.w3schools.com'
// let parse = new URL(sample)
// let head = parse.hostname
// console.log(parse);


// function sample(callback) {
//       console.log(callback);
//       callback();
// }

// function hai(name1) {
//   console.log('dewaf');

// }
// sample(name1)





