let employee=[{id:101,name:"Ranbeer",exp:4},{id:112,name:"Kabeer",exp:9},{id:122,name:"Deepika",exp:7}]

//NOTE : Map() iterates array and at each iteratation it will execute function and returns new array.
console.log("Id  Name           using Map" );
employee.map((s)=>{console.log(s.id,s.name)})    //print the data

console.log("\nEXP as array       using Map" );
let map_result=employee.map((s)=>{return s.exp})  //returns an array
console.log(map_result);

//Difference b/w forEach and map.

console.log("\nEmployee data as it is       using forEach" );
employee.forEach((a)=>{ console.log(a);})

console.log("\nEmployee data as an array       using forEach" );
let foreach_result=employee.forEach((s)=>{return s})  //returns undefined
console.log(foreach_result);

//map() returns new array      forEach returns Undefined/Nothing. 