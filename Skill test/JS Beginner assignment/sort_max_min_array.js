const arr=[90,-89,-445,45,70,86,107,2074,124,23]
console.log(arr);

//Using sort()
console.log("Sort method :",arr.sort());

//creating a sort method Ascending
console.log("sort asc :");
arr.sort(function (a,b) {
    return a-b
});
console.log(arr);

//creating a sort method Descending
console.log("sort desc :");
arr.sort(function(a, b) {
    return b-a 
});
console.log(arr);

//Finding the Lowest value & Highest Value in the array
console.log("Lowest value in array :");
arr.sort(function(a, b){
    return a-b
});
console.log(arr[0]);
console.log("Highest value in array :");
console.log(arr[arr.length-1]);

//By using math.max & max.min
// console.log("Highest value in array :");
// arr.sort(function arrmax(y){
//     return Math.max.apply(null,y);
// })
// console.log(arrmax(arr));

// console.log("Lowest value in array :");
// arr.sort(function arrmin(x){
//     return Math.min.apply(null,x);
// });
// console.log(arrmin(arr));