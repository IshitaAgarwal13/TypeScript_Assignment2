export{}
class Student
{
 studentId: number;
 studentName:string;
 studentMarks: number;
 studentGender:string;
 studentPhone:number;

 constructor(studentId: number, studentName:string, studentMarks:number, studentGender:string, studentPhone:number ){
     this.studentId=studentId;
     this.studentName=studentName;
     this.studentMarks=studentMarks;
     this.studentGender=studentGender;
     this.studentPhone=studentPhone;
 }
 
 getId():number{
     return this.studentId;
 }
 getName():string{
    return this.studentName;
}
getGender():string{
    return this.studentGender;
}
getPhone():number{
    return this.studentPhone;
}

 getResult():string{
 if (this.studentMarks >= 35) {
 return "Pass";
 }
 else {
 return "Fail";
 }
 }
}

var s : Student[];
s=[new Student(111,"Wills",78,'M',789454434),new Student(222,"Jasmine",80,'F',893345210),new Student(333,"Chelsy",91,'F',789334532),new Student(444,"Smith",32,'M',899903456),new Student(555,"James",81,'M',786755432) ];


for(let i=0;i<5;i++){
    console.log("Details of "+(i+1)+" student are: ");
    console.log("Student Id: "+s[i].getId());
    console.log("Student Name: "+s[i].getName());
    console.log("Student Gender: "+s[i].getGender());
    console.log("Student Phone Number: "+s[i].getPhone());
    console.log("Student is pass/Fail: "+s[i].getResult());
    console.log("\n");

}
