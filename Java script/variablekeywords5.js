function demovariable(){
    //let a=43
    console.log("Within the outer range a is",a)
    {
        var a=53// error local scope is already declared
        console.log("Within the block range a is",a)
    }
    console.log("Again within the outer range a is",a)
}

demovariable()