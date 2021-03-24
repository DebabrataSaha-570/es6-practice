function add (num1 , num2 = 15) {
    // if(num2 == undefined){
    //     num2 = 15;
    // }
    // num2 = num2 || 15;
    return num1 + num2
}
const total = add(10)
console.log(total)