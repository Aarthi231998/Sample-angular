function definition(fun)
{
    console.log("first 20% of the logic")
    fun("Data set 1")
    console.log("another 20% of the logic")
    fun("Data set 2")
    console.log("We are done")
}// Library

//caller
//function call
definition(
    function(data){
        console.log("caller logic")
        console.log(data, "is processed by the caller")
    }
)