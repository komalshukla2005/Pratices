// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
let x=9;
let y=7;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x**y)
console.log(x%y)
console.log(x/y)

// 2. Take two numbers and only print the integer part when a is divided by b.
let k = 12;
let p = 7;
console.log(Math.floor(k / p));

// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
let num =4;
let n =2;
console.log((Math.pow(num, n)));

// 4 Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
let num1=20;
let num2=11;
console.log(num1/num2)

// 5 Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let a=10;
let b=20;
let c=30;
let d=40;
let e=50;
console.log("the avrage is "+(a+b+c+d+e)/5)

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let sell=150;
let constprice=100;
if (sell>constprice){
    let profit=sell-constprice;
    console.log(profit)
}else{
    console.log("No Profit")
}

// 7. Take a number and print out the last digit of the number.
let A=129;
let l=A%10;
console.log(l)


// 8. Take a 2 digit number and return the first and last digits.
let number=25;
let f=number/10
let last=number%10
console.log (Math.floor(f))
console.log(last)

// 9. Write a JavaScript program to find the largest of three numbers.
let first=20;
let second=20;
let third=90;
if(first>second && first>third){
    console.log(`the first ${first} is grater than both`);
}else if (second>first &&  second>third){
    console.log(`the second  ${second} is grater than both`);
}else if(first==second && second==third && third==first){
    console.log("all number are uqale")
}
else{
    console.log(`the  third ${third} is grater than both`)
}


// 10. Write a JavaScript program to check whether a number is even or odd.
let odeeven=19;
if (odeeven%2==0){
    console.log("it is even")
}else{
    console.log("it is odd")
}


// 11. Write a JavaScript program to check whether a given number is prime or not.
let prime=4;
let check=0
let i=1;
while(i<=prime){
    if(prime%i==0){
        check++;
    }i+=1
}
if(check==2){
    console.log("The number is Prime")
}else{
    console.log("The number is not Prime")
}

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.

// Celsius to Fahrenheit
let cel = 30;
let fah = (cel * 9/5) + 32;
console.log(fah + "°F");

// Fahrenheit to Celsius
fah = 86;
celsius = (fah - 32) * 5/9;
console.log(cel + "°C");

