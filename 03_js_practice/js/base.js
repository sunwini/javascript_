// task 1 

let time = {
    hours : 12,
    minutes : 59,
    seconds : 58,

    showTime : function()
    {
        let h = this.hours < 10 ? "0" + this.hours : this.hours;
        let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        
        return console.log(`${h}:${m}:${s}`);
    },


    addSecond : function()
    {
        this.seconds++;

        if(this.seconds == 60)
        {
            this.seconds = 0;
            this.minutes++;
        }

        if(this.minutes == 60)
        {
            this.minutes = 0;
            this.hours++;
        }

        if(this.hours == 24)
        {
            this.hours = 0;
        }
    },


    removeSecond : function()
    {
        this.seconds--;

        if(this.seconds < 0)
        {
            this.seconds = 59;
            this.minutes--;
        }

        if(this.minutes < 0)
        {
            this.minutes = 59;
            this.hours--;
        }

        if(this.hours < 0)
        {
            this.hours = 23;
        }
    },
};

time.showTime();

time.addSecond();
time.addSecond();
time.addSecond();

time.showTime();

time.removeSecond();
time.removeSecond();
time.removeSecond();

time.showTime();


//task 2

let car = {
    mark : "Nissan",
    model : "Leaf",
    year : 2015,
    averageSpeed : 80,
};

let res = "\tCar info\n";
for(const property in car)
{
    res += property + " : " + car[property] + "\n";
}

console.log(res);

function timeToPass(car, distance)
{
    let time = distance / car.averageSpeed;
    let rest = 0;
    while(time >= 4)
    {
        rest++;
        time -= 4;
    }
    let allTime = distance / car.averageSpeed + rest;

    return allTime;
}

let distance = 700;

console.log(`Distance : ${distance} km`);

console.log("Driver needs to rest every 4 hours for 1 hour");

let result = timeToPass(car, distance);


console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
console.log(`Time to pass ${distance} km : ${result} hours`);
