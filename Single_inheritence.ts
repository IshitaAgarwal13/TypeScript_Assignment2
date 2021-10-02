export{};

class Car{
    move():void{
        console.log("Move..");
    }
    break():void{
        console.log("break...")
    }
}

class Audi extends Car{
    autoPilot():void{
        console.log("AutoPilot on..")
    }
    autoGear():void{
        console.log("AutoGear on..")
    }

}

let c:Car=new Car();
console.log("For class Car");
c.move();
c.break();

let a:Audi = new Audi();
console.log("For class Audi");
a.autoPilot();
a.autoGear();
a.move();
a.break();
