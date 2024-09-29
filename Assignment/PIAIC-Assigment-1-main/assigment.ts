//Age Calculator
var currentyear:number = 2024;
var bornyear:number = 2005;
var age:number = currentyear - bornyear;
console.log("Your age is: ",age);

//Area of Rectangle
var width:number = 4;
var length:number = 7;
var areaofrectangle:number = width * length;
console.log("Area of Rectangle is: ", areaofrectangle);

//Area of Circle
var radius:number = 5;
var areaofcircle:number = 3.14*radius**2;
console.log("Area of Circle is: ",areaofcircle);

//Area of Cube
var edgeofcube:number = 6;
var areaofcube:number = 6*edgeofcube**2;
console.log("Area of cube is:",areaofcube);

//Temprature Converter
var CelsiusTemprature:number = 35;
var FarenheitTemprature:number = 78;
var Celsius_Farenheit:number = (CelsiusTemprature*9/5)+32;
var Farenheit_Celsius:number =(FarenheitTemprature-32)*5/9;
console.log("Celsius to Farenheit is: ", Celsius_Farenheit);
console.log("Farenheit to Celcius is: ",Farenheit_Celsius);

//Convert time from seconds to minutes and seconds
var SecondsTime:number = 185;
var Timeinminutes:number = Math.round(SecondsTime/60);
var Timeinseconds:number = SecondsTime%60;
console.log("Time in minutes and seconds:",Timeinminutes,"Minutes and",Timeinseconds,"Seconds");

//Calculate Percentage
var value:number = 76;
var Totalvalue:number = 200;
var Percentage:number = (value/Totalvalue)*100;
console.log("Perecentage is: ",Percentage);

/*Increment and Decrement Practice Questions

/Q1:
let a = 2;
let b = ++a * 2; 
b?
Answer : b = 6 

Q2
let x = 5;
let y = x-- + 2;
y?
Answer : y = 6 

Q3 
let x = 3;
let y = ++x + x++ + ++x;
y?
Answer : y = 18 

Q4 
let m = 2;
let n = ++m * m++ * --m;
n?
Answer: n = 27

Q5
let k = 3;
let l = 5;
let result = ++k + l-- - k++ + --l;
result?
Answer: result = 8

Q6
let a = 2;
let b = 4;
let c = a++ + ++b - --a + b--;
a?,b?,c?
Answer: a = 3, b = 4, c = 9

Q7
let a = 5;
let b = 3;
let c = 2;
let d = 7;
let result = ++a * (b-- + c) / --d;
a?, b?, c?, d? ,result?
Answer: a = 6, b = 2, c = 2, d = 6, result = 5

Q8
let a = 2;
let b = 3;
let c = 4;
let result = a++ * (--b + a) / (c-- - b);
m?, o?, n?, result?
Answer: m = 3, o = 3, n = 2, result = 10 */