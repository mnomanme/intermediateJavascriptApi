// 23-10 break continue in a for loop
// break
const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

for (let i = 0; i < nums.length; i++) {
	const element = nums[i];
	if (element > 40) {
		break;
	}
	console.log('Break :', element);
}

// continue
const nums2 = [1, 2, 3, -4, 5, -6, 7, -8, 9, -10];

for (let i = 0; i < nums2.length; i++) {
	const element = nums2[i];
	if (element < 0) {
		continue;
	}
	console.log('Continue :', element);
}
