// 36_5-3 Understanding closure and return multiples from function

const bank = (owner) => {
	balance = 0;
	return (amount) => {
		// balance = balance + amount;
		balance += amount;
		return balance;
	};
};

const oneBank = bank('Mohammad');
// oneBank(100);
console.log(oneBank(100));
console.log(oneBank(300));
console.log(oneBank.balance);
console.log(oneBank(500));

const bank1 = (owner) => {
	balance = 0;
	return {
		deposit: (amount) => {
			// balance = balance + amount;
			balance += amount;
			return balance;
		},
		withdraw: (amount) => {
			// balance = balance + amount;
			balance -= amount;
			return balance;
		},
	};
};

const doubleBank = bank1('Noman');

console.log(doubleBank.deposit(100));
console.log(doubleBank.deposit(100));
console.log(doubleBank.balance);
console.log(doubleBank.deposit(100));
console.log(doubleBank.deposit(100));

console.log(doubleBank.withdraw(50));
