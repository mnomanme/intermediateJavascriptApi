const items = {
	burger: 'Rajukian Burger',
	getFullBurger: function () {
		console.log(this);
		return 'Mr.' + this.burger;
	},
};

items.getFullBurger();

const items2 = {
	pizza: 'Naga Nugges',
};

items2.getFullBurger = items.getFullBurger;
console.log(items2.getFullBurger);

items.getFullBurger();
items2.getFullBurger();

function add(p, q) {
	console.log(this);
	return p + q;
}
add(10, 20);
items2.sum = add;
items2.sum();

setTimeout(() => {
	console.log(this);
}, 2000);
