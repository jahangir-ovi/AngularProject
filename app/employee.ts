export class Employee {

    id:number=0;
    firstname:string="";
    lastname:string="";
    email:string="";
    mobile:number=0;
    salary:number=0;
    constructor(id:number,firstname:string,lastname:string,email:string,mobile:number,salary:number){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.mobile=mobile;
        this.salary=salary;
    }
}
