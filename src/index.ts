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

type Grade = {
	workName: string,
	mark: 100 | 0
}

type Visit = {
	lesson: string,
	present: boolean
}


class Student {
	badgeTypeMap = new Map<'single_fast' | 'single_standart' | 'double_fast' | 'double_standart', typeof BadgeTypesEnum[keyof typeof BadgeTypesEnum]>([
		['single_fast', BadgeTypesEnum.COLOR],
		['single_standart', BadgeTypesEnum.COLOR],
		['double_fast', BadgeTypesEnum.MONO],
		['double_standart', BadgeTypesEnum.MONO]
	])

	_firstName: string;
	_lastName: string;
	_birthYear: number;
	_grades: Grade[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
	_visits: Visit[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

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

	setGrade(grade: Grade) {
		this._grades.push(grade);
	}

	setVisit(visit: Visit) {
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




