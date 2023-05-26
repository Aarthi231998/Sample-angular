a=[34,55,32,234]
a[8]=786

for(let x=0;x<a.length;x++)
console.log(a[x])

//not useful if you have prperties[string index or object] to be 
//iterated
//not good if elements are placed in random indexes
/*for(let x=0;x<a.length;x++)
console.log(a[x])*/
//most appropriate for loop for processing
//arrays with random index and array with properties

for(let x in a)
console.log(x)





c[-243]="Aarthi.s"
b={sno:1, name:"Aarthi.s"}
a[JSON.stringify(b)]="javascript object value part"

for(let x in c)
console.log(x,a[x]) // print index