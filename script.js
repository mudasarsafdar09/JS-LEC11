
//Prototypes in JS
const student = {
    fullName : "mudasar",
    marks: 94.4,
    printMarks: function () {
        console.log("marks = ",this.marks);
    },
};

const employee = {
    calculateTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

const karanArjun1 = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 50000,
    calculateTax() {
        console.log("tax rate is 20%")
    },
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//Classes in JS

 {
    class toyotaCar{
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.MDDDD = brand;
    }
}

let furtuner = new toyotaCar();
furtuner.setBrand("Furtuner");
console.log(furtuner);
console.log(furtuner.MDDDD);

let marsdies = new toyotaCar();
let lexus = new toyotaCar();

}
// Constructor() Method

class mdCar{
    constructor(brand, milage) {
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }

    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let furtuner = new mdCar("furtuner", 10);
console.log(furtuner);
let marsdies = new mdCar("marsdies", 15);
console.log(marsdies);

let lexus = new mdCar("lexus");
let honda = new mdCar();


//Inheritance in JS

class parent {
    hello(){
        console.log("hello");
    }
}

class Child extends parent {

}

let obj = new Child();





class person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work(){
        console.log("work nothing");
    }
}

class Enginer extends person {
    work(){
        console.log("solve problems, build something")
    }
}

class Doctor extends person{
    work(){
    console.log("Treat patients");
    }
    eat(){
        console.log("eat but on diting");
    }

}
let mudasar = new Enginer();
let rahab = new Doctor();
console.log(rahab);


//super keyword

class peoples{
    constructor(name){
    this.peoples = "homo sapiens";
    this.name = name;
    }

    eat(){
        console.log("eat roti");
    }
    sleep(){
        console.log("sleep in night")
    }
}

class programer extends peoples {
    constructor(name){
        super(name);
    }

    work(){
        super.eat();
        console.log("work on social media");
    }
    live(){
        console.log("live in pakistan");
    }
}

let obj01 = new programer("Mudasar");
console.log(obj01);


// let's Practice q.1  q.2

let data = "secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ",data)
    }

}


class Admin extends user {
    constructor(name, email) {
 
            super(name, email);
 

    }
    editData() {
        data = "work hard";
    }
}

let student1 = new user("shradha", "abc@email.com");
let student2 = new user("zain", "zain3423@email.com");

let teacher1 = new user("dean", "dean434@gmail.com")

let admin1 = new Admin("admin", "admin34@gmail.com");
console.log(student1);
console.log(student2);

 // Error Handling
 //try-catch
 //try {
 //...normal code
 //} catch (err){//err is error object
 //...handling error
 //}

let a = 3;
let b = 4;
console.log("a =",a);
console.log("b =",b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
try {
    console.log("a+b = ", a + c);
} catch(err) {
    console.log(err);
}


console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);





try {
    console.log("mudasarmd");
   } catch (err) {
       console.log(err);
   }
   