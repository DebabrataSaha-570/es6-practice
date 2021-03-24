const person = {name: "shuvo saha", age:"21", job: "student", gfName: "undefined", friends: ['shiful farhan bappi', 'saiful alam', 'tawsif ahnaf', 'mithun sutradhar']}

const {name, age, gfName} = person;
console.log(name, age, gfName)

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}

const {leader} = complexObject.info;
console.log(leader)

const friends = ['Saiful alam', 'bappi', 'mithun', 'tawsif']
const [prothom, ditiyo, ...bakigula] = friends;
console.log(prothom, ditiyo, bakigula)