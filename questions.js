"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
// let charInput: string = readlineSync.question('Enter a character : ');
// console.log('You have entered : ' , charInput);
// let num1:number = parseFloat(readlineSync.question('Enter number 1 : '));
// let num2:number = parseFloat(readlineSync.question('Enter number 2 : '));
// console.log('Sum is : ', num1 + num2);
// let p:number = parseFloat(readlineSync.question('Enter principle amount : '));
// let r:number = parseFloat(readlineSync.question('Enter interest rate : '));
// let n:number = parseFloat(readlineSync.question('Enter number of years : '));
// console.log('Simple interest ' , p*r*n/100)
// let mark:number = parseFloat(readlineSync.question('Enter the mark'));
// let grade: string;
// if (mark > 90) {
//     grade = "A";
// } else if (mark >= 80 && mark <= 89) {
//     grade = "B";
// } else if (mark >= 70 && mark <= 79) {
//     grade = "C";
// } else if (mark >= 60 && mark <= 69) {
//     grade = "D";
// } else if (mark >= 50 && mark <= 59) {
//     grade = "E";
// } else {
//     grade = "Failed";
// }
// console.log("Your grade is:", grade);
// let dayNumber: number = parseInt(readlineSync.question("Enter a number (1-7): "));
// let day: string;
// switch (dayNumber) {
//     case 1:
//         day = "Sunday";
//         break;
//     case 2:
//         day = "Monday";
//         break;
//     case 3:
//         day = "Tuesday";
//         break;
//     case 4:
//         day = "Wednesday";
//         break;
//     case 5:
//         day = "Thursday";
//         break;
//     case 6:
//         day = "Friday";
//         break;
//     case 7:
//         day = "Saturday";
//         break;
//     default:
//         day = "Invalid Entry";
// }
// console.log("Day:", day);
// let number: number = parseInt(readlineSync.question("Enter a number: "));
// // Print the multiplication table
// console.log(`Multiplication Table of ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${number} = ${i * number}`);
// }
// let limit: number = parseInt(readlineSync.question("Enter a limit: "));
// let sum: number = 0;
// for (let i = 1; i <= limit; i += 2) {
//     sum += i;
// }
// console.log(`Sum of odd numbers = ${sum}`);
// let rows: number = parseInt(readlineSync.question("Enter the number of rows: "));
// for (let i = 1; i <= rows; i++) {
//     let rowOutput = "";
//     for (let j = 1; j <= i; j++) {
//         rowOutput += j + " ";
//     }
//     console.log(rowOutput.trim());
// }
// let size: number = parseInt(readlineSync.question("Enter the size of arrays: "));
// let array1: number[] = [];
// console.log("Enter the values of Array 1:");
// for (let i = 0; i < size; i++) {
//     array1.push(parseInt(readlineSync.question(`Element ${i + 1}: `)));
// }
// let array2: number[] = [];
// console.log("Enter the values of Array 2:");
// for (let i = 0; i < size; i++) {
//     array2.push(parseInt(readlineSync.question(`Element ${i + 1}: `)));
// }
// [array1, array2] = [array2, array1];
// console.log("Array 1 after swapping:", array1);
// console.log("Array 2 after swapping:", array2);
// let size: number = parseInt(readlineSync.question("Enter the size of an array: "));
// // Accept values for the array
// let array: number[] = [];
// console.log("Enter the values of the array:");
// for (let i = 0; i < size; i++) {
//     array.push(parseInt(readlineSync.question(`Element ${i + 1}: `)));
// }
// // Count even numbers
// let evenCount = array.filter(num => num % 2 === 0).length;
// // Display the count of even numbers
// console.log(`Number of even numbers in the given array is: ${evenCount}`);
// let size: number = parseInt(readlineSync.question("Enter the size of an array: "));
// let array: number[] = [];
// console.log("Enter the values of the array:");
// for (let i = 0; i < size; i++) {
//     array.push(parseInt(readlineSync.question(`Element ${i + 1}: `)));
// }
// array.sort((a, b) => b - a);
// console.log("Sorted array in descending order:", array);
// let str: string = readlineSync.question('Enter a String : ');
// let strRev: string = str.split('').reverse().join('');
// if(str === strRev) {
//     console.log('Entered string is palindrome')
// } else {
//     console.log('Entered string is not palindrome');
// }
// let size : number = parseFloat(readlineSync.question('Enter the size '));
// function get2dArray(size: number , arrayName: string):number[][] {
//     console.log(`Enter the values of ${arrayName}`);
//     let array:number[][] = []
//     for(let i = 0 ; i<size ; i++){
//         let row = readlineSync.question(`Enter the row ${i+1}`)
//                               .split(' ')
//                               .map(num => parseFloat(num));
//         array.push(row)
//     }
//     return array;
// }
// let array1 = get2dArray(size , 'Array 1')
// let array2 = get2dArray(size , 'Array 2')
// function addArray(size:number , arr1:number[][] , arr2:number[][]):number[][]{
//     let sumArray:number[][] = [];
//     for(let i = 0 ; i<size ; i++){
//         let row:number[] = []
//         for(let j = 0 ; j<size ; j++){
//             row.push(arr1[i][j] + arr2[i][j])
//         }
//         sumArray.push(row);
//     }
//     return sumArray;
// }
// let sumArray = addArray(size , array1 , array2);
// console.log("Sum of the two arrays:");
// sumArray.forEach(row => console.log(row.join(" ")));
// function getArray(size: number):number[]{
//     let arr: number[] = []
//     for(let i = 0 ; i<size ; i++){
//         let num = parseFloat(readlineSync.question(`enter the element ${i+1}`));
//         arr.push(num)
//     }
//     return arr
// }
// function displayArray(arr:number[]): void{
//     console.log('Array elements : ' , arr.join(' , '));
// }
// function main(): void{
//     let size = parseFloat(readlineSync.question('Enter the array size : '));
//     let arr = getArray(size)
//     displayArray(arr)
// }
// main();
// function isPrime(num: number): boolean {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// function main(): void {
//     let num = readlineSync.questionInt("Enter a number: ");
//     if (isPrime(num)) {
//         console.log(`Entered number ${num} is a Prime number.`);
//     } else {
//         console.log(`Entered number ${num} is NOT a Prime number.`);
//     }
// }
// main();
// class Calculator {
//     addition(a: number, b: number): number {
//         return a + b;
//     }
//     subtraction(a: number, b: number): number {
//         return a - b;
//     }
//     multiplication(a: number, b: number): number {
//         return a * b;
//     }
//     division(a: number, b: number): number {
//         if (b === 0) {
//             console.log("Error: Division by zero is not allowed.");
//             return NaN;
//         }
//         return a / b;
//     }
// }
// function main(): void {
//     let calculator = new Calculator();  
//     console.log("Choose an operation:");
//     console.log("1. Addition");
//     console.log("2. Subtraction");
//     console.log("3. Multiplication");
//     console.log("4. Division");
//     let choice = readlineSync.questionInt("Enter your choice (1-4): ");
//     if (choice < 1 || choice > 4) {
//         console.log("Invalid choice. Please enter a number between 1 and 4.");
//         return;
//     }
//     let num1 = readlineSync.questionFloat("Enter first number: ");
//     let num2 = readlineSync.questionFloat("Enter second number: ");
//     let result: number;
//     switch (choice) {
//         case 1:
//             result = calculator.addition(num1, num2);
//             console.log(`Result: ${num1} + ${num2} = ${result}`);
//             break;
//         case 2:
//             result = calculator.subtraction(num1, num2);
//             console.log(`Result: ${num1} - ${num2} = ${result}`);
//             break;
//         case 3:
//             result = calculator.multiplication(num1, num2);
//             console.log(`Result: ${num1} * ${num2} = ${result}`);
//             break;
//         case 4:
//             result = calculator.division(num1, num2);
//             if (!isNaN(result)) {
//                 console.log(`Result: ${num1} / ${num2} = ${result}`);
//             }
//             break;
//     }
// }
// main();
// function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
//     let grade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
//     return grade;
// }
// function main(): void {
//     console.log("Enter the marks scored by the student:");
//     let writtenTest = readlineSync.questionFloat("Written test = ");
//     let labExams = readlineSync.questionFloat("Lab exams = ");
//     let assignments = readlineSync.questionFloat("Assignments = ");
//     let finalGrade = calculateGrade(writtenTest, labExams, assignments);
//     console.log(`Grade of the student is ${finalGrade.toFixed(1)}`);
// }
// main();
// function calculateIncomeTax(income: number): number {
//     let tax = 0;
//     if (income <= 250000) {
//         tax = 0;
//     } else if (income > 250000 && income <= 500000) {
//         tax = (income - 250000) * 0.05;
//     } else if (income > 500000 && income <= 1000000) {
//         tax = (250000 * 0.05) + (income - 500000) * 0.20;
//     } else if (income > 1000000 && income <= 5000000) {
//         tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
//     }
//     return tax;
// }
// function main(): void {
//     let income = readlineSync.questionFloat("Enter the annual income: ");
//     let taxAmount = calculateIncomeTax(income);
//     console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
// }
// main();
// function printPattern(): void {
//     let num = 1;
//     for (let i = 1; i <= 4; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) { 
//             row += num + "\t"; 
//             num++;
//         }
//         console.log(row); 
//     }
// }
// printPattern();
// function multiplyAdjacent(arr: number[]): number[] {
//     let result: number[] = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         result.push(arr[i] * arr[i + 1]); 
//     }
//     return result;
// }
// function main(): void {
//     let inputArray: number[] = [1, 2, 3, 4, 5];
//     console.log("Input Array:", inputArray);
//     let outputArray = multiplyAdjacent(inputArray);
//     console.log("Output Array:", outputArray);
// }
// main();
// function getArray(size: number): number[][] {
//     let arr: number[][] = [];
//     console.log(`Enter values for a ${size}x${size} matrix:`);
//     for (let i = 0; i < size; i++) {
//         arr[i] = [];
//         for (let j = 0; j < size; j++) {
//             arr[i][j] = parseInt(readlineSync.question(`Enter value for position [${i}][${j}]: `));
//         }
//     }
//     return arr;
// }
// function addArray(arr1: number[][], arr2: number[][], size: number): number[][] {
//     let sumArray: number[][] = [];
//     for (let i = 0; i < size; i++) {
//         sumArray[i] = [];
//         for (let j = 0; j < size; j++) {
//             sumArray[i][j] = arr1[i][j] + arr2[i][j];
//         }
//     }
//     return sumArray;
// }
// function displayArray(arr: number[][]): void {
//     for (let row of arr) {
//         console.log(row.join("\t")); 
//     }
// }
// function main(): void {
//     let size = parseInt(readlineSync.question("Enter the size of the array: "));
//     console.log("\nEnter values for Array 1:");
//     let array1 = getArray(size);
//     console.log("\nEnter values for Array 2:");
//     let array2 = getArray(size);
//     console.log("\nArray 1:");
//     displayArray(array1);
//     console.log("\nArray 2:");
//     displayArray(array2);
//     let sumArray = addArray(array1, array2, size);
//     console.log("\nSum of Array 1 and Array 2:");
//     displayArray(sumArray);
// }
// main();
// class TwoDArray{
//     private matrix:number[][] = [];
//     private size:number;
//     constructor(size: number){
//         this.size = size
//     }
//     getArray(): void{
//         console.log('enter values');
//         for(let i = 0 ; i<this.size ; i++){
//             this.matrix[i] = []
//             for(let j = 0; j<this.size ; j++){
//                 this.matrix[i][j] = parseFloat(readlineSync.question(`Enter value for position [${i}][${j}]: `))
//             }
//         }
//     }
//     displayArray():void{
//         for(let row of this.matrix){
//             console.log(row.join(' '));
//         }
//     }
// }
// function main(): void {
//     let size = parseInt(readlineSync.question("Enter the size of the array: "));
//     let matrixObj = new TwoDArray(size);
//     matrixObj.getArray();
//     matrixObj.displayArray();
// }
// main();
// class Area {
//     // Circle
//     circle(radius: number): number {
//         return 3.14 * radius * radius;
//     }
//     // Square
//     square(side: number): number {
//         return side * side;
//     }
//     // Rectangle
//     rectangle(length: number, breadth: number): number {
//         return length * breadth;
//     }
//     // Triangle
//     triangle(base: number, height: number): number {
//         return 0.5 * base * height;
//     }
// }
// // Child Class (Inherits Area)
// class MyClass extends Area {
//     start() {
//             console.log("\nChoose an option to calculate area:");
//             console.log("1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit");
//             let choice = Number(readlineSync.question("Enter your choice: "));
//             switch (choice) {
//                 case 1:
//                     let radius = Number(readlineSync.question("Enter the radius: "));
//                     console.log(`Area of the Circle: ${this.circle(radius)}`);
//                     break;
//                 case 2:
//                     let side = Number(readlineSync.question("Enter the length: "));
//                     console.log(`Area of the Square: ${this.square(side)}`);
//                     break;
//                 case 3:
//                     let length = Number(readlineSync.question("Enter the length: "));
//                     let breadth = Number(readlineSync.question("Enter the breadth: "));
//                     console.log(`Area of the Rectangle: ${this.rectangle(length, breadth)}`);
//                     break;
//                 case 4:
//                     let base = Number(readlineSync.question("Enter the base: "));
//                     let height = Number(readlineSync.question("Enter the height: "));
//                     console.log(`Area of the Triangle: ${this.triangle(base, height)}`);
//                     break;
//                 case 5:
//                     console.log("Exiting program...");
//                     return;
//                 default:
//                     console.log("Invalid choice! Please try again.");
//             }
//     }
// }
// // Run the program
// const obj = new MyClass();
// obj.start();
// interface Book{
//     title:string , 
//     author:string,
//     readingStatus:boolean
// }
// const library:Book[] = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ]
// function displayReadingStatus(library: Book[]): void {
//     library.forEach((book) => {
//         const message = book.readingStatus
//             ? `Already read '${book.title}' by ${book.author}.`
//             : `You still need to read '${book.title}' by ${book.author}.`;
//         console.log(message);
//     });
// }
// displayReadingStatus(library);
function reverseString(my_string) {
    try {
        var reversed = my_string.split("").reverse().join("");
        console.log("Reversed string is : ".concat(reversed));
    }
    catch (err) {
        console.log("Error : ".concat(err.message));
    }
    finally {
        console.log("Type of my_string is : ".concat(typeof my_string));
    }
}
// Test cases
reverseString("1234");
reverseString(Number(1234));
var items = [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }];
var sum = items.reduce(function (acc, obj) { return acc + obj.a; }, 0);
console.log('sum is ', sum);
var user = {
    name: 'amar',
    email: 'sfdsdf@gmail.com'
};
var user1 = {
    id: 11121,
    email: 'sdfsdaf'
};
/// tuples 
var tuple;
tuple = ['fsadfsadf', 8];
// promise 
// function getData(success: boolean): Promise<string | boolean>{
//     return new Promise((res , rej) => {
//         if(success){
//             res('data successfully fetched')
//         } else{
//             rej(false);
//         }
//     })
// }
// getData(true)
//     .then((mes)=> console.log('resolved' , mes))
//     .catch((err)=> console.log('error' , err))
// Generics
function getValue(value) {
    return value;
}
console.log(getValue('hello'));
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.sound = function () {
        console.log("Sound of ".concat(this.name));
    };
    return dog;
}(Animal));
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.sound = function () {
        console.log('this is the sound ');
    };
    return Vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.speed = function () {
        console.log('speeed is 10000');
    };
    return car;
}(Vehicle));
var Car = new car();
Car.sound();
Car.speed();
var Dog = new dog('dog');
Dog.sound();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function (n) {
        return n;
    };
    return Shape;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.area = function (n) {
        return n * 2;
    };
    return rectangle;
}(Shape));
function Log(target, key) {
    console.log("Property \"".concat(key, "\" was accessed."));
}
var User1 = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    return _a = /** @class */ (function () {
            function User1() {
                this.name = __runInitializers(this, _name_initializers, "Alice");
                __runInitializers(this, _name_extraInitializers);
            }
            return User1;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [Log];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var users = new User1();
console.log(users.name);
