const firstName = "Justin"
const lastName = "Timberlake"
const fullName = firstName + " " + lastName + " is a good boy";
const fullName2 = `${firstName} ${20+50} is a good boy`
console.log(fullName)
console.log(fullName2)

// output: Justin Timberlake is a good boy
//         Justin 70 is a good boy

const multiLine = "I love you\n"
+ "I miss you\n"
+ "I need you"
console.log(multiLine)

// output: I love you
//     I miss you
//     I need you

const multiLine2 = `I love you
I miss you
I dont need you`
console.log(multiLine2)

// output: I love you
//     I miss you
//     I dont need you