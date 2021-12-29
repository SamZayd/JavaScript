class Account {
constructor(acno, acname, acamt){
    this.acc_no=acno;
    this.acc_Name=acname;
    this.acc_amount=acamt;
    this.get_Details()
    }
    get_Details(){
        console.log(this.acc_no, this.acc_Name, this.acc_amount);
    }
}

a=100;
b=["Abhishek","Bipin","Saurabh", "Ankit", "Prem", "Manoj", "Ritik", "Sumit", "Sanjay", "Hemant", "Manish", "Samar"];
c=10000;

for(i=0; i<=10; i++){
    a=a+2;
    c=Math.floor(Math.random() *100000)
    new Account(a, b[i], c);
}