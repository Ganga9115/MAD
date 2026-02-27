// Interface
interface IStudent {
    name: string;
    marks: number[];
    total: number;
    average: number;
    grade: string;
}

// Class
class Student implements IStudent {
    name: string;
    marks: number[];
    total: number;
    average: number;
    grade: string;

    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
        this.total = this.calculateTotal();
        this.average = this.calculateAverage();
        this.grade = this.calculateGrade();
    }

    private calculateTotal(): number {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }

    private calculateAverage(): number {
        return this.total / this.marks.length;
    }

    private calculateGrade(): string {
        if (this.average >= 90) return "A+";
        else if (this.average >= 75) return "A";
        else if (this.average >= 60) return "B";
        else if (this.average >= 50) return "C";
        else return "Fail";
    }
}

// Array to store students
let students: Student[] = [];

// DOM Function
function addStudent(): void {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const m1Input = document.getElementById("m1") as HTMLInputElement;
    const m2Input = document.getElementById("m2") as HTMLInputElement;
    const m3Input = document.getElementById("m3") as HTMLInputElement;

    const name = nameInput.value;
    const marks = [
        Number(m1Input.value),
        Number(m2Input.value),
        Number(m3Input.value)
    ];

    if (!name || marks.some(mark => isNaN(mark))) {
        alert("Please enter valid details!");
        return;
    }

    const student = new Student(name, marks);
    students.push(student);

    displayStudents();
    findTopper();

    nameInput.value = "";
    m1Input.value = "";
    m2Input.value = "";
    m3Input.value = "";
}

function displayStudents(): void {
    const tableBody = document.querySelector("#resultTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";

    students.forEach(student => {
        const row = tableBody.insertRow();

        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.marks[0].toString();
        row.insertCell(2).innerText = student.marks[1].toString();
        row.insertCell(3).innerText = student.marks[2].toString();
        row.insertCell(4).innerText = student.total.toString();
        row.insertCell(5).innerText = student.average.toFixed(2);
        row.insertCell(6).innerText = student.grade;
    });
}

function findTopper(): void {
    if (students.length === 0) return;

    const topper = students.reduce((prev, current) =>
        (prev.average > current.average) ? prev : current
    );

    const topperDisplay = document.getElementById("topper") as HTMLElement;
    topperDisplay.innerText = `Topper: ${topper.name} (${topper.average.toFixed(2)})`;
}