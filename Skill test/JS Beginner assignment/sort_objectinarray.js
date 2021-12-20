const cars=[
    {id: 123, comp: "BMW", model: "8i", LD: 2014},
    {id: 122, comp: "Bugatti", model: "Veryon", LD: 2016},
    {id: 121, comp: "Lamborghini", model: "Aventador", LD: 2008}
]

console.log("Sort by Launch date")
cars.sort(function sortyear(a, b){
    return a.LD - b.LD;
})
console.log(cars);

console.log("Sort by Company Name")
cars.sort(function sortname(a, b){
    let x=a.comp.toLowerCase();
    let y=b.comp.toLowerCase();
    if(x<y){return -1}
    if(x>y){return 1}
})
console.log(cars);