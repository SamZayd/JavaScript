// 1. How to create array in javscript

a=[10,20,30,40,50]

//2. How to access items from array in javascript

console.log(a[0],a[1],a[2],a[3],a[4]);

//3. How to access last item from an array

console.log("\nLast element\n");
let b=a.pop();
console.log(b);

//4. How to access all item from an array using loop

console.log("\nall element using loop\n");
let ai=0
while(ai<=a.length-1){
    console.log(a[ai]);
    ai++;
}

//5. How to create array of object in javascript

console.log("\ncreate object elements\n");
c=[{id:101,name:"Raghu"},{id:102,name:"Ram"}]

//6. How to access array of object items in javascript

console.log("\naccess array of object\n");

console.log(c[0],c[1]);

//7. How to create 2D-array in javascript

console.log("\ncreating 2D-array\n");

d1=[[1,2,3],
    [4,5,6]]
d2=[[4,5,6],
    [7,8,9]]   

//8. How to create 2D-array in javascript

console.log("\nadding 2 2D-array\n");
ds=d1+d2;
console.log(ds);   

//9. How to access 2D-array item in javascript

console.log("\naccess 2D-array items\n");
console.log(d1[0],d2[0]);

//10. Javascript array push method

console.log("\nPush method\n");

e=[10,20,30,40,50]
e.push(60);
console.log(e);

//11.Javascript array pop method

console.log("\nPop method\n");
e.pop();
console.log(e);

//12.Javascript array shift method

console.log("\nShift method\n");
e.shift();
console.log(e);

//13.Javascript array unshift method

console.log("\nUnshift method\n");
e.unshift(10);
console.log(e);

//14.Javascript array Splice method

console.log("\nSplice method\n");
e.splice(1,2);          //removes the contents in the given range(end-1) [10,20,30,40,50] removes 20,30 from the array
console.log(e);

//15. Javascript array Slice method

f=[5,10,15,20,25,30]
console.log("\nSlice method\n");
x=f.slice(1,3);         //copy the elements in the given range(end-1) 1 is start 3 end so it copies [10,15] 
console.log(x);
//or
console.log(f.slice(1,3));

//16. How to copy Data from array from javascript

console.log("\nCopy elements using slice method\n");
let y=f.slice()
console.log("y is ",y);
//or
let z=f;
console.log("z is ",z);

//17. Javascript array copy data vs copy reference
console.log("\nIs y==z ?");        //check if value of y & z are equal 
(y==z) ? console.log(true) : console.log(false)
console.log("\nIs y===z ?");       //check if value of y & z are equal and of similar type  
(y===z) ? console.log(true) : console.log(false)

//18. Javascript use of indexOf method

console.log("\nUse of indexOf");
console.log("indexOf 30 in y[]",y.indexOf(30));

//20. How to find Object from array of object in javascript

console.log("\nobject in array of object");
cars={color:"Red", company:"Mercedes", model:"AMG"}

console.log(cars.model);