const BadgeSize: Object = {
	single: '4x3',
	double: '4x6'
}

const Print: Object = {
	standart: 'color',
	fast: 'zpl'
}

enum BadgeTypesEnum {
	COLOR = 'color',
	MONO = 'mono'
}

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;


class Student {
	badgeTypeMap = new Map<string, typeof BadgeTypesEnum[keyof typeof BadgeTypesEnum]>([
		['single_fast', BadgeTypesEnum.COLOR],
		['single_standart', BadgeTypesEnum.COLOR],
		['double_fast', BadgeTypesEnum.MONO],
		['double_standart', BadgeTypesEnum.MONO]
	])

	_firstName: string;
	_lastName: string;
	_birthYear: number;
	_grades: {workName: string, mark: 100 | 0}[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
	_visits: {lesson: string, present: boolean}[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

	get fullName(): string {
		return `${this._lastName} ${this._firstName}`;
	}
	
	set fullName(value: string) {
		[this._lastName, this._firstName] = value.split(' ');
	}

	get age(): number {
		return new Date().getFullYear() - this._birthYear;
	}

	constructor(firstName: string, lastName: string, birthYear: number) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._birthYear = birthYear;
	}

	setGrade(grade: {workName: string, mark: 100 | 0}) {
		this._grades.push(grade);
	}

	setVisit(visit: {lesson: string, present: boolean}) {
		this._visits.push(visit);
	}

	getPerformanceRating(): number {
		const gradeValues = this._grades.map(grade => grade.mark);

		if (!gradeValues.length) return 0;

		const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
		const attendancePercentage = (this._visits.map(visit => visit.present).filter(present => present).length / this._visits.length) * 100;

		return (averageGrade + attendancePercentage) / 2;
	}
}





//  class Student {
//     // implement 'set grade' and 'set visit' methods
  
//     _firstName: string;
//     _lastName: string;
//     _birthYear: number;
//     _grades: {[workName: string]: number} = {}; // workName: mark
//     _visits: boolean[] = []; // lesson: present
  
//     constructor(firstName: string, lastName: string, birthYear: number) {
//       this._firstName = firstName;
//       this._lastName = lastName;
//       this._birthYear = birthYear;
//     };
  
//     get fullName(): string {
//       return `${this._lastName} ${this._firstName}`;
//     };
  
//     set fullName(value: string) {
//       [this._lastName, this._firstName] = value.split(' ');
//     };
  
//     get age(): number {
//       return new Date().getFullYear() - this._birthYear;
//     };

//     setGrade(workName: string, mark: number): void {
//       this._grades[workName] = mark;
//     };

//     setVisit(presence: boolean): void {
//       this._visits.push(presence);
//     };
  
//     getPerformanceRating(): number {
//       const gradeValues = Object.values(this._grades);
  
//       if (!gradeValues.length) return 0;
  
//       const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
//       const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;
  
//       return (averageGrade + attendancePercentage) / 2;
//     };
//   };