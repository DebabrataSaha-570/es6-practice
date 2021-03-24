// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result)

// const doubleIt = function(num){
//     return num * 2;
// }
// const result2 = doubleIt(6)
// console.log(result2)

// ..........arrow function when only one parameter....

// const doubleIt = num => num * 2;
// const result3 = doubleIt(7)
// console.log(result3)

// ...........arrow function when there is no parameter ........

const give5 = () => 5;
const result4 = give5()
console.log(result4)

// .......arrow function with two parameter ......

const add = (x, y) => x + y;
const result5 = add(10, 15)
console.log(result5)

// ......... arrow function with two parameter with multiple line ....

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff
    return result
}
const result6 = doMath(15, 10)
console.log(result6)