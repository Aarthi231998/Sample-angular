class student{
//sno:
//name: //not legal in es2015
constructor(sno,name)
{
    this.sno=sno
    this.name=name
}
display()
{
    console.log("sno:",this.sno, "name:",this.name)
}
}

obj1= new student(11,"Aarthi")  
obj2= new student(12,"Meena") 