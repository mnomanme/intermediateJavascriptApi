// 31-8 (advanced) Inheritance, extends class, super, class method

// TeamMember
class TeamMember {
	name;
	address = 'Mohakhali';
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}
}

// Support
class Support extends TeamMember {
	groupSupportTime;
	designation = 'Support Web Dev';
	constructor(name, address, time) {
		super(name, address);
		this.groupSupportTime = time;
	}
	startSession() {
		console.log(this.name, 'start a support session');
	}
}

// StudentCare
class StudentCare extends TeamMember {
	designation = 'Care Routine Dev';
	buildRoutine(student) {
		console.log(this.name, 'Build a routine for', student);
	}
}

// NeptuneDev
class NeptuneDev extends TeamMember {
	codeEditor;
	designation = 'Neptune App Dev';
	constructor(name, address, editor) {
		super(name, address);
		this.codeEditor = editor;
	}
	releaseApp(version) {
		console.log(this.name, 'release app version', version);
	}
}

// support
const nature = new Support('Mohammad Noman', 'Dhaka', 12);
const weather = new Support('Good', 'Rajshahi', 11);
const student = new Support('Mohammad Faruque', 'BAFSD', 07);
const enginner = new Support('Mohammad Baki', 'Google', 03);

student.startSession();
nature.startSession();
enginner.startSession();

console.log(nature);
console.log(weather);
console.log(student);
console.log(enginner);

// StudentCare
const studentClass = new StudentCare('Mohammad Noman', 'Khulna');
console.log(studentClass);

// NeptuneDev
const typeEditor = new NeptuneDev('Mohammad Ali', 'Pakistan', 'Android Studio');

typeEditor.releaseApp('1.4.5');
console.log(typeEditor);
