let num: number = 50

if(num > 50){
    console.log('passed')
} else {
    console.log('failed')
}

// Looops
switch(num){
    case 1 : 
        console.log('Monday');
        break
    case 50 : 
        console.log('Tuesday');
        break;
    
    default: console.log('Other day')
};

let count: number = 1
while(count <= 5){
    console.log(count)
    count++
}

do{
    console.log(count);
    count++
} while(count <= 5);


// Arrays 
let arr: number[] = [1,2,3,4,5,6];
let arr2: (number | string)[] = ['a' , 2];
console.log('array 2 ' , arr2);


// basic functions 
function sum(num1: number , num2: number): number {
    return num1 + num2
}
console.log(sum(22 , 21));
