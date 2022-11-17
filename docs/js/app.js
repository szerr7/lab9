/*lab 9*/
"use strict";
//Question 1
let Person={
    name:'',
    dateOfBirth:null,

    getName:function(){
        return this.name;
    },
    setName:function(Name){
        this.Name=Name;
    },
    getDateOfBirth:function(){
        return this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)
        +"-"+this.dateOfBirth.getDate();
    }
};

const john=Object.create(Person,{
    name:{
        value:"John"
    },
    dateOfBirth:{
        value:new Date(1998,12,10)
    },
    age:{
        value:20
    }
});





console.log("Person's name : "+john.getName());


console.log('Date of birth  : ' + john.getDateOfBirth()) ;


console.log('-----------------Question 2-----------------------------') ;

const employee={
    salary:0.0,
    hireDate:new Date(),
    jobTitle:null,

    doJob:function(title){
        this.jobTitle=title;
    },
    toString:function(){
        return this.name+" is a "+this.jobTitle+" who earns "+"$"+this.salary;
    }
};

Object.setPrototypeOf(employee,Person);
const anna=Object.create(employee,{
    name:{
        value:"anna"
    },
    salary:{
        value:249995.50
    }
});

anna.doJob("Programmer");
console.log(anna.toString());




console.log('-----------------Question 3-----------------------------') ;

function PersonOne(name,dob){

    this.name=name;
    this.dateOfBirth=dob;
}
PersonOne.prototype.toString=function(){
    return "Name: "+this.name+", "+"DateOfBirth: "+this.dateOfBirth.getFullYear()
    +"-"+(this.dateOfBirth.getMonth())+"-"+this.dateOfBirth.getDate();
}
const peter=new PersonOne("peter",new Date(1985,11,10));
console.log(peter.toString());

