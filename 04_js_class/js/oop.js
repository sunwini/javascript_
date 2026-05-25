class Car{
    #id; //private variable
    constructor(model, year, colour, speed){
        this.id = Math.floor(Math.random() * 1000);
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.speed = speed;
    }

    set Speed(value){
        if(value > 0)
            this.speed = value;
        else
            this.speed = 0;
    }

    get miles(){
        return this.speed * 0.621;
    }

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    paint(newColour){
        this.colour = newColour;
    }

    setSpeed(value){
        if(value > 0)
            this.speed = value;
        else
            this.speed += 0;
    }

    print(){
        console.log(`ID : ${this.id} . Car ${this.model} . ${this.year} . ${this.colour} . ${this.speed}`);
        console.log(`Speed : ${this.speed} km/h`);
    }
}

const myCar = new Car("Nissan Leaf", 2015, "white", 150);

myCar.id = 100;

console.log(`ID : ${myCar.id}`);

myCar.print();

//myCar.setSpeed(40);
myCar.Speed = 130;

myCar.print();

console.log(`Speed : ${myCar.miles} mph`);

myCar.paint("red");

myCar.print();

class PoliceCar extends Car{
    constructor(model, year, colour, speed, volume){
        super(model, year, colour, speed);
        this.volume = volume;
    }
}
