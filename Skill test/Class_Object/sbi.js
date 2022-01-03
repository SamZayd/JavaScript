class sbi{
    min_balance = 500;
    withdrawl_amount = 600;
    constructor(a,b,c){
      this.account_id = a;
      this.user_name = b;
      this.deposited_Amount = c;  
      this.account_Opening()    
    }
    account_Opening(){
      console.log("hi "+ this.user_name +" welcome to sbi");
    }
    account_Balance(){
      console.log("account balance is " + (this.deposited_Amount + this.min_balance - this.withdrawl_amount));
    }
  }
  let k1 = new sbi(4507, "ravi teja", 5500);  
  k1.account_Balance();  

  let k2 = new sbi(5894, "santosh", 20000);
  k2.account_Balance();