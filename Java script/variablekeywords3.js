//global,function scope and local scope

a=30

function printer(){
    a=39//function scope
    console.log("a:",a)
    var a=100
}

printer()
console.log("global a:",a)