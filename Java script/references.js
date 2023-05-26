a=[2,34,21,12]
console.log(a)
b=a //pass by references
console.log(b)
b[4]=900
console.log(a)


//copy the array
c=[]
for(let x in a)
c[x]=a[x]
console.log(c)
c[7]=909
console.log(a)
console.log(c)
