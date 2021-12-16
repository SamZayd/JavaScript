let array = [10,true,"Ten",{id:101,name:"sam"},false,101.22]

console.log("Type of third element :",typeof array[3]);

console.log(array);

let i=0
console.log("Using while loop");
while(i<=array.length-1){
    console.log(i,".",array[i]);
    i++;
}

console.log("Using for loop");
for(i=0; i<=array.length-1; i++){
    console.log(i,".",array[i]);
}

//Array object
console.log("\nArray with object\n");
let emp = [{id: 100,name: "Sam"},{id:101,name: "Zayd"}];
console.log(emp);

let myarr=[];
myarr[0]=Date.now;
myarr[1]=emp;
myarr[2]=array;
console.log(myarr);
console.log(myarr[0]);

//Array methods
console.log("\nMethods Here\n");

console.log("Array is ",array);

array.sort()
console.log("sort ",array);

array.shift()       //remove first element 
console.log("shift ",array);

array.unshift("Two")    //add element to start
console.log("unshift ",array);

array.pop()         //remove last element
console.log("pop ",array);

array.push("SamZayd")       //add element to last
console.log("push ",array);

console.log("Array is ",array);

array.splice(2,2)   //start from 2 & remove 2 elements
console.log("splice ",array);

delete array[2]
console.log("After Delete [2] ",array);

let any=['It','s',8,'o','clock',true]

console.log("any =",any);

console.log("toString ",any.toString());

console.log("join ",any.join(" "));

//Concatination

console.log("\nConcat array with any\n");

console.log("Array =",array);
console.log("Any =",any);

arrayany=array.concat(any);     //concat of two array
console.log("Array+any =",arrayany);

all=arrayany.concat(myarr,emp)
console.log("Arrayany+myarr+any =",all);

all.sort()
console.log("Sort all =",all);