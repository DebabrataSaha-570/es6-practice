// ....Destructuring form normal object.....

const person = {name: 'Shuvo Saha', age: 21, profession: "Student", friends:['bappi', 'mithun', 'saiful', 'tawsif'] }

const {name, friends, age} = person;
console.log(name, friends, age)

// ...... Destructuring from complex object ....

const complexObject = {
    name : 'abc', 
    info: {
        address: 'Kola bagan',
        profession: "facebooker"
    }
}

const {profession} = complexObject.info;
console.log(profession)

// .... Destructuring from an Array ....

const friends2 = ['mithun', 'saiful', 'bappi', 'tawsif']
const [prothom, ditiyo, ...bakigula] = friends2;
console.log(prothom, ditiyo, bakigula)