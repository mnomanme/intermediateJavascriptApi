// 25-6 new keyword, class and object difference
class Person {
	constructor(firstName, lastName, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
}

const heroPerson = new Person('Hero', 'Palam', 20000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Rakib', 25000);
console.log(friendlyPerson);

// class declare using function old
function Burger(item, place, price) {
	this.name = item;
	this.location = place;
	this.cash = price;
}

const bestBurger = new Burger('Mr. Whopper', 'Uttara', 380);
console.log(bestBurger);
