function outer(){
    a=30
    //var  a=30

    function inner(){
        console.log("outer a value in inner",a)
        a++;
    }
    return inner
}

fun= outer()
fun2= outer()
fun() // 30
fun()  //31
fun() //32
fun() //33 if a =30 : 30 if var a=30