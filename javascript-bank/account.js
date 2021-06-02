/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((Number.isInteger(amount)) && (amount > 0)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawTotal = 0;
  if (this.transactions.length > 0) {
    for (var i in this.transactions) {
      if (this.transactions[i].type === 'deposit') {
        depositTotal += this.transactions[i].amount;
      } else {
        withdrawTotal += this.transactions[i].amount;
      }
      var total = depositTotal - withdrawTotal;
    }
    return total;
  } else {
    return 0;
  }
};
