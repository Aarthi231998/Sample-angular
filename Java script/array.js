a=[23,34,123,45,12,7657]
console.log(a[6])//undefined
console.log(a[234]) //undefined



a[2]=90  //legal, works
a[90]=890  //
console.log(a[90])
console.log(a)
console.log(a[9])

a[-23]=346
a["place"]="chennai"
b={sno:1,name:"aarthi"}
a[b]={training:"javascript object"}
console.log(a.length,"is the size of array")
console.log(a[b])
console.log(a[b]["training"])