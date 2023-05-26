// javascript allows creating function within a function 
// the function which is defined within a function
//is generally meant to be accessed only within the outer function 
//not globally
//if fun a needs function b and it doesnt want anything outside the function
// the function to use it we can declare b as in in inner function

function outer(b)
{
    state=1
    function inner()
    {
        console.log(state,"is accessible with inner")
        innerstate=1
        console.log(innerstate, "within innerfunction")
        state++;
        innerstate++;
    }
    console.log(state, "accessed within outer")
    //inner()---working version
    //console.log(inerstate,"accessed with outer")//not possible
    return inner
}
result =outer("king")
console.log(result)
result()
result()
result()
//outer.inner()