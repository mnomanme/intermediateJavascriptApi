// 25-9 Asynchronous Javascript setTimeout, setInterval
function doSomething() {
	console.log(5555);
}

console.log(2222);
setTimeout(doSomething);
console.log(3333);
doSomething();
console.log(4444);

setTimeout(function () {
	console.log('lazy & waiting');
}, 3000);

setTimeout(() => {
	console.log('See you later');
}, 5000);

setInterval(() => {
	console.log("Let's go");
}, 2000);
