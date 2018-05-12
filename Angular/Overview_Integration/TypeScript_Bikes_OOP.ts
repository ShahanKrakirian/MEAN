// class Elephant {
//    constructor(public age: number){}
//    birthday = () => {
//       this.age++;
//    }
// }
// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }

class Bike {

    constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0,
    ) {}
    displayInfo = () => {
        console.log("Price: ", this.price);
        console.log("Max_Speed: ", this.max_speed);
        console.log("Miles: ", this.miles);
    }
    ride = () => {
        console.log("Riding 10 miles...");
        this.miles += 10;
        return this;
    }
    reverse = () => {
        console.log("Backtracking 5 miles...");
        if (this.miles >= 5) {
            this.miles -= 5;
        }
        return this;
    }
}

var bike1 = new Bike(200, "100mph");
var bike2 = new Bike(100, "10mph");
var bike3 = new Bike(500, "700mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();