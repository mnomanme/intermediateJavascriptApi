// 36_5-4 (advanced) Hoisting, block scope, scope chain

function patriChai(age, earning) {
	console.log(trueAge);
	var decision = canMarray(40000);
	console.log(decision);
	console.log(age);
	console.log(earning);

	var trueAge = age + 7;

	function canMarray(expense) {
		const remaining = earning - expense;
		if (remaining > 1000) {
			const show = 1000;
			console.log(show);
			return true;
		}
		return false;
	}
}
patriChai(30, 500000);
