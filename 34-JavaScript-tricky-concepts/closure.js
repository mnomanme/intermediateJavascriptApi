// 34-7 (advanced) Closure, encapsulation, private variable

const stopWatch = () => {
	let counter = 0;
	return () => {
		counter++;
		return counter;
	};
};

const clockOne = stopWatch();

console.log(clockOne);
console.log(clockOne());
