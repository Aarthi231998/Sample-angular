person={sno:2,name:"Aarthi",city:"chennai"}

candidate=person //pass by reference
candidate.skills=["java","c#","python"]

member={...person,city:"mumbai", interests:["singing","cricket","gaming"]}
console.log(person)
console.log(candidate)
console.log(member)