var obj = new Object();

var obj ={};

//add new property
obj.name = "Asya";
obj.address = "Rivne";
obj.number = 222;
console.log(`Name : ${obj.name} . Address : ${obj.address} . Number : ${obj.number}`);

//----------------------------------

let product = {
    name : "Iphone 16 Pro Max",
    price : 75000,
    memory : 2000,
    applications : ["Instagram", "Facebook", "Telegram"],
    owner : {
        name : "Vitya",
        surname : "Kovalenko",
    }
}

console.log(product);

console.log(`Full name : ${product.owner.name} ${product.owner.surname}`);

//-----------------------------------

let prod = {};
prod["name"] = "Ball";
prod["size"] = 25;
prod["price"] = 1500;
prod["type"] = "mini-football";

console.log(prod);

//-----------------------------------

let student = {};

student.name = "Bob";
student.age = 45;
student["average mark"] = 4.9;
student.averageMark = 11;

console.log(student);

delete student.averageMark;
student.address = "Kyiv";
console.log(student);

if("address" in student)
    console.log("Address is exist");
else
    console.log("Address is not exist");

for(const key in student)
{
    console.log(key);
}

//-----------------------------------

let car = {
    mark : "Nissan",
    model : "Leaf",
    year : 2015,
    volume : 2.0,
    colour : "white"
}

let res = "\tCar info\n";
for(const property in car)
{
    res += property + " : " + car[property] + "\n";
}
//alert(res);


//-----------------------------------

let person = {
    firstname : "Tom",
    lastname : "Tomson",
    birthdate : 2010,
    address : {
        street : "Soborna",
        city : "Rivne",
        building : 25
    },
    cars : ["Nissan", "Toyota", "Honda"]
}

console.log(`${person.firstname} ${person.lastname} . Cars : ${person.cars}`)

function addcarToPerson(person, newCar)
{
    person.cars.push(newCar);
}

function showAllCars(person)
{
    alert("Cars : " + person.cars);
}

//let name_car =  prompt("Enter car name : ");

//addcarToPerson(person, name_car);
//showAllCars(person);


//-----------------------------------

const player = {
    id : 1,
    username : "bobik",
    password : "123456789",
    email : "bobik@example.com",
    score : 0,

    print : function() 
    {
        console.log(`User :: ${this.username} . Score :: ${this.score}`);
    },

    increasescore(value)
    {
        this.score += value;
    }
}

player.print();
player.increasescore(20);
player.print();

