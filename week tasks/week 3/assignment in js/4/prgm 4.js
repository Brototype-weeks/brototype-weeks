let mark = prompt("Enter the mark");

mark = parseFloat(mark);

if (mark >= 50 && mark <= 100) {
    console.log(mark +" is passed");
}else if(mark < 50 && mark > 0){
    console.log(mark+" is failed");
}else{
    console.log("invalid mark");
}