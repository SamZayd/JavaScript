//1. WAP to print 1 to 10 using while loop

a=1
console.log("\n1 to 10")
while(a<=10){
    console.log(a);
    a++;
}

//2. WAP to print 10 to 1 using while loop

b=10
console.log("\n10 to 1")
while(b>0){
    console.log(b);
    b--;
}

//3. WAP to print 5 to 15 using for loop

console.log("\n5 to 15")
for(c=5; c<=15; c++){
    console.log(c)
}

//4. WAP to print 15 to 10 using for loop

console.log("\n15 to 10")
for(d=15; d>=10; d--){
    console.log(d)
}

//5. WAP to print 1 to 10 even num using while loop

console.log("\n even 1 to 10")
e=2
while(e<=10){
    console.log(e);
    e=e+2;
}

//6. WAP to print 1 to 10 odd using for loop

console.log("\n odd 1 to 10")
for(f=1; f<=10; f=f+2){
    console.log(f)
}

//7. WAP to print first 10 (mul of 4) using while loop

console.log("\n first 10 (mul of 4)(table of 4)")
g=4;
while(g<=40){
    console.log(g)
    g=g+4;
}

//8. WAP to print mul table of 6 using while loop

console.log("\n table of 6")
h=6;
while(h<=60){
    console.log(h)
    h=h+6;
}

//9. WAP to print factors of 24 using while loop

console.log("\n factors of 24")
i=1;
ia=24;
while(i<=ia){
    if(ia % i == 0){
    console.log(i)
    }
    i++;
}

//10. WAP to print reverse of a digit of numbers

console.log("\n reverse of a digit")

let rev=0, rem, num=1613, n=num;
while(n>0){
    rem=n%10;
    rev=rev*10+rem;
    n=parseInt(n/10);       //parseInt used to convert float into Int
 }
console.log(rev);

//11. WAP to read 5 numbers and print even.

o=[4,6,5,3,8,9]
console.log("\nfind even among 5");
for(v=0; v < o.length; v++){
    if(o[v]%2 == 0){
        console.log(o[v],"found");
    }
}

//12. WAP to print fibonacci numbers upto given number.

p=17
let q=0,r=1,s=0;
console.log("\nFibonacci number");

for(let i=1; i<=p; i++){
    console.log(q);     
    s=q+r;              //0 <== 0+1        //1 <== 1+1          //2 <== 1+2        //3 <== 2+3
    q=r                 //(0) <== 1        //(1) <== 1          //(1) <== 2        //(2) <== 3
    r=s                 //1 <== 1          //1 <== 2            //2 <== 3          //3 <== 5
}

//13. WAP to find the number is armstrong number or not.

arm=153                                 //153 <=armstrong=> 1*1*1 + 5*5*5 + 3*3*3
console.log("\nArmstrong Number");
let temp=arm, rem=0, sum=0;
while(temp>0){
    rem=temp%10;
    sum=sum+(rem*rem*rem)
    temp=parseInt(temp/10);
}
if(arm == sum){
    console.log(arm," is armstrong number");
}else{
    console.log(arm," is not armstrong number"); 
}