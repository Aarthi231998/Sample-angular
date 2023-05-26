function demovariable(){
    var a=43
    console.log("Within the outer range a is",a)
    {
        let a=53
        console.log("Within the block range a is",a)
    }
    console.log("Again within the outer range a is",a)
}

demovariable()