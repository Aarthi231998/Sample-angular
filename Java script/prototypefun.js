function student(sno,name)
{
    this.sno =sno
    this.name = name
    console.log(this)
}

student.prototype.display =function(){
    console.log("sno:",this.sno,"name:",this.name)
}
//student(1,"Aarthi")  //window scope or global scope
obj1= new student(1,"Aarthi")  // seperate scope for student is created
obj2= new student(2,"Meena") 
//student will behave like a classs and student() will behave like constructor

obj1.display()
obj2.display()
