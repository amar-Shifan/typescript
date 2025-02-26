// types
// String
let name:string = 'Amar'
console.log(name.toUpperCase());

// Number 
let num: number = 9.3
console.log(num)

// Boolean
let bool: boolean = true
console.log(bool)

export {}

// Function 
function addTwo(num: number): number{
    return num + 2
}

console.log(addTwo(2));

let error = (error: string):string => {
    return error
}

// void function 
let errlog = (error: string):void =>{
    throw new Error(error);
}