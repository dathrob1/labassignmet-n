
function subtract(num1,num2){
        return num1-num2;   
    } 
function divide (num1,num2){
        return num1/num2;    
    }

(function(){
var service;
var num1;
var num2;
service = prompt("choose service 1.add, 2.subtract,3.divide 4.multiply");

if (service == 1){
    var sum=0;
    amount=""
        
    while (amount !="f"){
        amount= prompt("enter number continuesly and when your finished enter f")
        if(amount=="f"){
            console.log(sum);
        }
        else{
        amount= parseInt(amount);
        sum = sum+amount;}
        
    } }
else if (service == 2){
    num1 = prompt("Enter Your First Number:");
    num2 = prompt("Enter Your Second Number:");
    num1 =parseInt(num1);
    num2 =parseInt(num2);
    let a = subtract(num1,num2);
    console.log(a);
} 
else if (service == 3){
    num1 = prompt("Enter Your First Number:");
    num2 = prompt("Enter Your Second Number:");
    num1 =parseInt(num1);
    num2 =parseInt(num2);
    let a = divide(num1,num2);
    console.log(a);
}
else if(service ==4){
    var sum=1;
    amount=""
        
    while (amount !="f"){
        amount= prompt("enter number continuesly and when your finished enter f")
        if(amount=="f"){
            console.log(sum);
        }
        else{
        amount= parseInt(amount);
        sum = sum*amount;}
        
    }
}})();


