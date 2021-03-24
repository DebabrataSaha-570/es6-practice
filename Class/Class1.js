class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Govt. Technical High School"
    }
}

const Student1 = new Student ( 12, "Shuvo")
console.log(Student1)

const student2 = new Student (4, "Bappi")
console.log(student2, student2.school)

const student3 = new Student (57, 'Mithun')
console.log(student3)