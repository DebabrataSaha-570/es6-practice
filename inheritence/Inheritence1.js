class Parent{
    constructor(){
        this.fatherName = "saha"
    }
}



class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child ('Shuvo');
console.log(baby.getFullName())