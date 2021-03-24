// ......normal function .....
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5)
console.log(result)

// ...... normal function as if variable .....

const doubleIt = function myFunction(num){
    return num * 2;
}
const result2 = doubleIt(5)
console.log(result2)

// ........ arrow function with no parameter .......

const give5 = () => 5;
const result3 = give5()
console.log(result3)

// ........ arrow function with one parameter ...... 
const doubleIt = num => num * 2;
const result4 = doubleIt(2)
console.log(result4) 

// ........ arrow function with multiple parameter .....

const add = (x, y) => x + y;
const result4 = add(5, 9)
console.log(result4)

// ...... arrow function with multiple parameter and multiple line ......

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result5 = doMath(15, 10)
console.log(result5)