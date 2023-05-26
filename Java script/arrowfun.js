function libfun(fun){
    var dataitems=["pthon programing","Java programming","c# programming"]
fun(dataitems[Math.round(Math.random()*2)])
}


class Dataholder{
    constructor(data)
    {
        this.data=data
    }
    show()
    {
        console.log("Data-->",this.data)
    }

    ChangeData(){
       /* libfun(function(value){
            this.data=value// thid is undefined
        }.bind(this))*/

        libfun((value)=> {
            this.data=value
        })
    }
}
obj=new Dataholder("javascript program")
//obj=new Dataholder("java program")
obj.show()
obj.ChangeData()
obj.show()
