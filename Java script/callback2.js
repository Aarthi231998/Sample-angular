function sendme(arr,fun)
{
    let items =["Bad","Good","afternoon","Morning","evening","abhi","Aarthi"]
    for(let x in arr){
        if(arr[x]>0 && arr[x] <=8)
        fun(items[arr[x]])
        else
        fun("!!!!!!!")
    }
}
sendme([1,3,5],
    function(data)
    {
        console.log("!!",data)
    }
)