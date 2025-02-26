"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// types
// String
var name = 'Amar';
console.log(name.toUpperCase());
// Number 
var num = 9.3;
console.log(num);
// Boolean
var bool = true;
console.log(bool);
// Function 
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2));
var error = function (error) {
    return error;
};
// void function 
var errlog = function (error) {
    throw new Error(error);
};
