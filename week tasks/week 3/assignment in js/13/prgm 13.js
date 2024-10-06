let  string = prompt("enter the string");
let flag=0;
let string1 = string.length;
 for(i=0;i< string1/2; i++){
    if (string[i] !=string[ string1-1-i] ) {
        flag = 1;
        break;
    }
 }
 if (flag==0) {
    console.log(string + " is palindrome");
 }else{
    console.log(string + " not palindrome");
 }
 