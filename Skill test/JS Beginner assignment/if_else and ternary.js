//WAP to check if a nummber is divisible by 7 or not
a=77;

if(a%7 == 0){
	console.log(a," is Divisible by 7");
}
else{
	console.log("False");
}

//WAP to check if a nummber is multiple of 3 or not
b= 27

if(b%3==0){
	console.log(b," is Multiple of 3")
}
else{
	console.log("False")
}

//WAP to check if a nummber is positive or not
c= 2/7

if(c > 0){
	console.log(c, " is positive")
}
else{
	console.log("False")
}

//WAP to check if a nummber is having 4 at the unit's place or not
// d= 27

// if(d){
// 	console.log("Multiple of 3")
// }
// else{
// 	console.log("False")
// }

//WAP to check if a nummber is 3-digit number or not
e= 277

e<999 && e>100 ? console.log(e," is 3-Digit Number") : console.log("False")


//WAP to check if a nummber is even or odd
f= 2212

f%2 == 0 ? console.log(f," is Even Number") : console.log("Odd Number")

//WAP to check is which number  is greater 

g1 =44
g2 =54

g1>g2 ? console.log(g1,"Is Greater") : console.log(g2,"Is Greater")

//WAP to check is which number is least

g1<g2 ? console.log(g1," Is Smaller") : console.log(g2," Is Smaller")

//WAP to check the greatest number in 3 Numbers
g3 =86
var great;
g1>g2 ? great = g1 : great =g2 
g3>great ? console.log(g3," is greatest") : console.log(great, "is greatest")

//or

if(g1>g2){
	 great= g1;
}
else{
	great=g2;
}
if(g3>great){
	console.log(g3," is greatest.")
}
else{
	console.log(great," is greatest.")
}

//WAP to check the least number in 3 Numbers

g1>g2 ? least= g2 : least= g1
least>g3 ? console.log(g3," is least.") : console.log(least,"is least")

//WAP 3 no's in ascening order 
x=61
y=42
z=31
console.log("Ascending order")
if (x < y && x < z) {
    console.log(x);
    if (y < z) {
        console.log(y);
        console.log(z);
    } else {                  
        console.log(z);
        console.log(y);
    }
} else if (y < z && y < x) {
    console.log(y);
    if (z < x) {
        console.log(z);
        console.log(x);
    } else {                  
        console.log(x);
        console.log(z);
    }
} else {                      
    console.log(z);        
    if (x < y) {
        console.log(x);
        console.log(y);
    } else {                 
        console.log(y);
        console.log(x);
    }
}