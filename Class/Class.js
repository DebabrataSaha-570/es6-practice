class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Govt THS School"
    }

}

const student1 = new Student(12, "Shuvo");
console.log(student1) 
// output: Student { id: 12, name: 'Shuvo', school: 'Govt THS School' }

const student2 = new Student(22, "Saha");
console.log(student2, student2.name)
// output: Student { id: 22, name: 'Saha', school: 'Govt THS School' } Saha

const student3 = new Student(29, 'Bappi')
console.log(student3)
// output: Student { id: 29, name: 'Bappi', school: 'Govt THS School' }