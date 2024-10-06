/* 
                            ----- NODE.JS & EXPRESS -----



-   What is Node.js?
       * Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular
         tool for almost any kind of project! Node.js runs the V8 JavaScript engine,Google Chrome’s 
         core, outside the browser. This allows Node.js to be very performant.A Node.js app runs 
         in a single process, without creating a new thread for every request.                             

-   Why Node.js?
        * Node.js is a cross-platform runtime, perfect for a wide range of use cases.
          Its huge community makes it easy to get started. It uses the V8 engine to compile 
          JavaScript and runs at lightning-fast speeds. Node.js applications are very scalable 
          and maintainable. Cross-platform support allows the creation of all kinds of applications -
          desktop apps, software as a service, and even mobile applications. Node.js is perfect for 
          data-intensive and real-time applications since it uses an event-driven, non-blocking
          I/O model, making it lightweight and efficient. 

-   History of Node.js:
        - Node.js was written initially by Ryan Dahl in 2009, about thirteen years
        - the introduction of the first server-side JavaScript environment, 
        - The initial release supported only Linux and Mac OS X.
        - the development and maintenance were led by Dahl and later sponsored by Joyent.

-   Nodejs vs Browser.
        - the browser and Node.js use JavaScript as their programming language.
        - Building apps that run in the browser is entirely different than building 
          a Node.js application.

-   Node.js Modules:
        - We split our code into different files to maintain, organize and reuse code whenever possible.
        - Node.js has many built-in modules that are part of the platform and comes with Node.js installation,
          for example, HTTP, fs, path, and more.
         
-   CommonJS vs ESM:
    
    CommonJS:
        - Syntax: Uses `require()` to import modules and `module.exports` to export them
            eg:
                // Importing a module
                   const module = require('module');
                   
                   // Exporting a module
                   module.exports = myFunction;

        - File Extension: Typically uses .js files.           
        - Loading: Synchronous loading of modules.
        - Scope: Modules are scoped to a single file, which helps in avoiding global namespace pollution.

    ES Modules (ESM):
        -Syntax: Uses `import` to bring in modules and `export` to expose them.  
            eg :
                   // Importing a module
                   import { myFunction } from './module.mjs';
                   
                   // Exporting a module
                   export const myFunction = () => { ... };

        - File Extension: Typically uses .mjs files or .js with the "type": "module" field in package.json.    
        - Loading: Asynchronous loading of modules.
        - Scope: Strictly scoped, promoting better modularization and cleaner code.
        - default export,
            eg:
                // Default export
                export default myFunction;
       
-   Creating a Module in Node.js:

        - modules means nodeJs different files represented name.itis reusable block of code.
        - types of modeules:
            (1) core Modeules       - it is build in modules that comes                eg: `fs`,`http`,`path`,
                                      with node.js essential functionality.                `os,`stream`,`event`.                  

            (2) third party module  - it is developed by community.available in npm     eg: `express` 
                                      and various functionality.

            (3) local module        - it is own created custome modules and specific    eg: Creating a `calculator.js` module 
                                      functionalities using applicatin.                      for using aruthmatic operation.
                                      
            module import export:
                eg:
                    //file1
                        const name1 = "vs code";
                        module.exports= name1; // one more name it is passing object eg : {name1,name2}
                    //file2
                        const display = require('./file1.js');
                        console.log(display);
                        
-   NPM - node package manager
      - private/ public package 
      - local installation  : node_modules `node modles`
      - global installation : npm install -g nodemon.


-   Javascript Errors:

        -EvalError         = This error is related to the global eval() function.
        -RangeError        = it is the not mention proper range/length. 
        -ReferenceError    = it means value fist load undifined then value asign.
        -SyntaxError       = it is typing a code any issue.not understand browser
        -TypeError         = it is number convert uppercase it is not possible.
        -URIError          = uniform resorce indigator


- system error:


       -EACCES - Permission denied
       -EADDRINUSE - Address already in use
       -ECONNRESET - Connection reset by peer
       -EEXIST - File exists
       -EISDIR - Is a directory
       -EMFILE - Too many open files in system
       -ENOENT - No such file or directory
       -ENOTDIR - Not a directory
       -ENOTEMPTY - Directory not empty
       -ENOTFOUND - DNS lookup failed
       -EPERM - Operation not permitted
       -EPIPE - Broken Pipe
       -ETIMEDOUT - Operation timed out


- User Specified Errors:

            User specified errors can be created by extending the base Error object, 
            a built-in error class. When creating errors in this manner,
             you should pass a message string that describes the error.


- Assertion Errors:
        An AssertionError in Node.js is an error that is thrown when the assert module 
        determines that a given expression is not truthy. 




- middleware:

Application-Level Middleware: Bound to an instance of the express object and can be used to handle requests for all routes or specific routes.
Router-Level Middleware: Bound to an instance of express.Router() and can be used to handle requests for specific routes defined in the router.
Error-Handling Middleware: Defined with four arguments (err, req, res, next) to catch and handle errors in the application.
Built-In Middleware: Provided by Express.js, such as express.static to serve static files and express.json to parse JSON payloads.
Third-Party Middleware: Provided by third-party libraries, such as morgan for logging and body-parser for parsing request bodies.





- File Handling in NodeJS:
     Common File Operations:-

     1.Reading Files
     2.Writing Files
     3.Appending Files
     4.Deleting Files
     5.Renaming Files

    File handling in Node.js can be done using the built-in fs (file system) module.

    Common File Operations:- 

     1.Reading Files
             You can read files asynchronously or synchronously using the fs module. 
             Asynchronous methods are generally preferred to avoid blocking the event loop.
             eg: 
            // Asynchronous read

                 const fs = require('fs');
                 fs.readFile('example.txt', 'utf8', (err, data) => {
                   if (err) {
                     console.error(err);
                     return;
                   }
                   console.log(data);
                 }); // read file after that file inside text display. // eg : hellow world.
         ======================
          // Synchronous read
                const fs = require ('fs');
                try {
                   const data= fs.readFileSync('tet.txt','utf8')
                        console.log(data);
                } catch (err){
                    console.log(err);
                }


     2.Writing Files
            You can write to a file asynchronously or synchronously.
        eg:
          Asynchronous Writing Files
         
                const fs = require('fs');

                fs.writeFile('test1.txt','hellow file',(err,data)=>{
                    if (err) {
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                })
           
        ======================
           Synchronous writeFile
                const fs = require('fs');
    
                try {
                    const data = fs.writeFileSync('test.txt',"lsdfhlaskhflksjflshklfhkhhhhhhhhhh");
                    console.log("good"); 
                    console.log(data); 
    
                } catch (error) {
                    console.log(error); 
                }


     3.Appending Files

        eg:
              Asynchronous Appending Files

                const fs = require('fs');

                let content = " \n hellow! how are you...."

                fs.appendFile('test1.txt',content,(err,data)=>{
                    if (err) {
                        console.log(err);
                    }else{
                        console.log("finish");
                    }
                })
         ======================
              Synchronous Appending Files
              
                const fs = require('fs');

                let content = " \n hellow! how are you.... "

                try {
                    const data = fs.appendFileSync('test.txt',content);
                    console.log("good"); 
                    console.log(data); 

                } catch (error) {
                    console.log(error); 
                }
              
     4.Deleting Files
     deleting file using unlink operation.
        eg:
            // Asynchronous delete
        
                const fs = require('fs');

                        try {
                const data = fs.unlinkSync('test.txt');
                console.log("good"); 
                console.log(data); 

            } catch (error) {
                console.log(error); 
            }

        ======================
        // Synchronous Deleting
            const fs = require('fs');

            fs.unlink('test2.txt',(err,data)=>{
                if (err) {
                    console.log(err);
                }else{
                    console.log("finish");
                }
            })

     5.Renaming Files
        eg:
            Asynchronous rename
                const fs = require('fs');
                fs.rename('test.txt','test2.txt',(err,data)=>{
                if (err) {
                    console.log(err);
                }else{
                    console.log("finish");
                }
            })
        ======================
            Synchronous Renaming

                try {
                    const data = fs.renameSync('test','test1.txt');
                    console.log("good"); 
                    console.log(data); 

                } catch (error) {
                    console.log(error); 
                }




   





 
*/