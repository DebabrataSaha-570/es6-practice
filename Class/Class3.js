class Mobile {
    constructor(name, price, warrenty){
        this.name = name;
        this.price = price;
        this.warrenty = warrenty;
        this.color = "Black";
        this.charger = '1';
    }
}

const mobile1 = new Mobile("xiaomi", 10000, 1)
console.log(mobile1)