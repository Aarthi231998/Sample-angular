a=[23,54,234,214]


b=[...a]//copies the value of the array, not reference
//b[5]=[...a[5]]
//es2015 and later

console.log(a)
console.log(b)
b[8]=9878
console.log(a)
console.log(b)

c=[234,54,234,32]
d=[54,65,23,23,c]
e=[54,65,23,23,...c]
console.log(c)
console.log(d)
console.log(e)


c[3]=44
console.log(c)
console.log(d)
