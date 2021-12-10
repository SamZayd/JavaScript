//10. WAP to print reverse of a digit of numbers

console.log("\n reverse of a digit")

let rev=0, rem, num=122443613, n=num;
while(n!=0){
    rem=n%10;
    rev=rev*10+rem;
    n=n/10;
    console.log(rev);     
}

