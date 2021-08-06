// 23-8 Closure, encapsulation, private variable
function stopWatch() {
	let count = 0;

	return function () {
		count++;
		return count;
	};
}

const clock = stopWatch();

console.log('Stopwatch :', clock);
console.log('Clock :', clock());
console.log('Clock :', clock());
console.log('Clock :', clock());
console.log('Clock :', clock());

const clock2 = stopWatch();

console.log('StopWatch2 :', clock);
console.log('Clock2 :', clock2());
console.log('Clock2 :', clock2());
console.log('Clock2 :', clock2());
console.log('Clock2 :', clock2());
console.log('Clock :', clock());
console.log('Clock :', clock());
console.log('Clock2 :', clock2());
