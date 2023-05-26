//global,function scope and local scope

a=30

function printer(){
    //a=39
    console.log("a:",a)
    a=100
}

printer()
console.log("global a:",a)