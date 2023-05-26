//arrow functions is an elegant way of writing anonymous
//functions
//the benefits are actually beyond sytantic ease

const add= function(a,b)
{
    return a+b
}

const hello=function(name){
    console.log("Hello"+name)
}
sum=(a,b)=>a+b
greet=(name)=>{
    console.log("helloo!!"+name)
}
sumv2=(a,b)=>{
    console.log("logic")
    return a+b
}
console.log(add(34,34))
console.log(sum(35,35))
hello("India")
greet("India now")