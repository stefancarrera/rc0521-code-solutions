/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((Number.isInteger(balance)) && (balance > 0)) {
    this.accounts.push(new Account(this.nextAccountNumber, holder));
    this.nextAccountNumber++;
    for (var i in this.accounts) {
      if (this.accounts[i].holder === holder) {
        this.accounts[i].deposit(balance);
        return this.accounts[i].number;
      }
    }
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i in this.accounts) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalances = 0;
  if (this.accounts.length > 0) {
    for (var i in this.accounts) {
      totalBalances += this.accounts[i].getBalance();
    }
    return totalBalances;
  }
  return 0;
};
