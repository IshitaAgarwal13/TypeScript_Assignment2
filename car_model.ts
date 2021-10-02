export{}

class Engine{
    engineNumber:number;
    mftYear:number;
    company:string;

    constructor(engineNumber:number, mftYear:number, company:string){
        this.engineNumber=engineNumber;
        this.mftYear=mftYear;
        this.company=company;
    }
}

class Car{
    modelNO: number;
    mftYear: string;
    engine: Engine;

    constructor(modelNO: number, mftYear: string, engine: Engine){
        this.modelNO=modelNO;
        this.mftYear=mftYear;
        this.engine=engine;
    }
}

let engine1:Engine=new Engine(101,1980,'Ford');
let car1: Car = new Car(78776,'2000',engine1);

console.log("Car model no: "+car1.modelNO);
console.log("Car manufacturing year: "+car1.mftYear);
console.log(car1.engine);
