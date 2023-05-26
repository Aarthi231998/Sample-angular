//global,function scope and local scope

a=30

function printer(){
    var a=39//function scope
    console.log("a:",a)
    a=100
}

printer()
console.log("global a:",a)