function sample(option){
    console.log("sample logic")
    if(option==1)
    return function(a,b)
    {
        return a+b;
    }
    else
    return function(a,b)
    {
        return a-b;
    }
}
//function return function

//console.log(sample())
console.log(sample(1)(12,35))

/*




function add(a,b)
{
    return a+b
}
function sub(a,b)
{
    return a-b
}
function sample(option)
{
if(option==1)
return sub 
else
return sub
} 
console.log(sample(1)(43,35))*/


