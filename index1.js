//)A Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.
class BankAccount {
    constructor() {
      this.initialamount = 0;
    }
  
    // method to check available balance
    checkbalance() {
      console.log(`Your available balance is ${this.initialamount}`);
    }
  
    // method to deposit amount
    depositmoney(depositamount) {
      if (depositamount > 0) {
        this.initialamount += depositamount;
        console.log('Deposit successful');
        console.log(`Your available balance is ${this.initialamount}`);
      } else {
        console.log('Invalid amount');
      }
    }
  
    // method to withdraw amount
    withdrawamount(withdrawalamount) {
      if (withdrawalamount > 0 && this.initialamount >= withdrawalamount) {
        this.initialamount -= withdrawalamount;
        console.log(`Your withdrawal of ${withdrawalamount} is successful and your available balance is ${this.initialamount}`);
      } else if (this.initialamount < withdrawalamount) {
        console.log('No available balance');
      } else {
        console.log('Invalid amount');
      }
    }
  }
  
  const myaccount = new BankAccount();
  myaccount.depositmoney(10000); 
  myaccount.withdrawamount(4500);
  
