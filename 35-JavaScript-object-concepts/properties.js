// 35-3 Keys, values, entities, delete, seal, freeze

const bottle = {
	color: 'yellow',
	hold: 'water',
	price: 40,
	isCleaned: true,
};

// getting all properties names
const keys = Object.keys(bottle);

console.log(keys);

// get all values
const values = Object.values(bottle);

console.log(values);

// get all entities or pairs
const pairs = Object.entries(bottle);

console.log(pairs);

// get delete
// get seal
// get freeze
Object.seal(bottle);
Object.freeze(bottle);

bottle.price = 400;
bottle.height = 50;

delete bottle.isCleaned;

console.log(bottle);
