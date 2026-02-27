interface Employee {
    id: number;
    name: string;
    salary: number;
    attendance: number;
}

let employees: Employee[] = [];

// Add Employee (Scan)
function addEmployee(): void {

    const idInput = document.getElementById("empId") as HTMLInputElement;
    const nameInput = document.getElementById("empName") as HTMLInputElement;
    const salaryInput = document.getElementById("empSalary") as HTMLInputElement;
    const attendanceInput = document.getElementById("empAttendance") as HTMLInputElement;

    const id = Number(idInput.value);
    const name = nameInput.value.trim();
    const salary = Number(salaryInput.value);
    const attendance = Number(attendanceInput.value);

    const result = document.getElementById("result") as HTMLElement;

    // Basic Validation
    if (!id || !name || !salary || !attendance) {
        result.innerText = "Please fill all fields correctly.";
        return;
    }

    // Check duplicate ID
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            result.innerText = "Employee ID already exists.";
            return;
        }
    }

    const employee: Employee = { id, name, salary, attendance };
    employees.push(employee);

    displayEmployees();
    clearInputs();

    result.innerText = "Employee added successfully!";
}

// Display Employees in Table
function displayEmployees(): void {

    const tableBody = document.querySelector("#employeeTable tbody") as HTMLElement;
    tableBody.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {

        const emp = employees[i];

        const row = `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                <td>${emp.attendance}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    }
}

// Search Employee (No .find())
function searchEmployee(): void {

    const searchId = Number((document.getElementById("searchId") as HTMLInputElement).value);

    const result = document.getElementById("result") as HTMLElement;

    let foundEmployee: Employee | null = null;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === searchId) {
            foundEmployee = employees[i];
            break;
        }
    }

    if (foundEmployee !== null) {
        result.innerText =
            "Found: " +
            foundEmployee.name +
            ", Salary: " +
            foundEmployee.salary +
            ", Attendance: " +
            foundEmployee.attendance;
    } else {
        result.innerText = "Employee not found.";
    }
}

// Max Salary (No spread operator)
function calculateMaxSalary(): void {

    const result = document.getElementById("result") as HTMLElement;

    if (employees.length === 0) {
        result.innerText = "No employees available.";
        return;
    }

    let maxSalary = employees[0].salary;

    for (let i = 1; i < employees.length; i++) {
        if (employees[i].salary > maxSalary) {
            maxSalary = employees[i].salary;
        }
    }

    result.innerText = "Maximum Salary: " + maxSalary;
}

// Min Attendance (No spread operator)
function calculateMinAttendance(): void {

    const result = document.getElementById("result") as HTMLElement;

    if (employees.length === 0) {
        result.innerText = "No employees available.";
        return;
    }

    let minAttendance = employees[0].attendance;

    for (let i = 1; i < employees.length; i++) {
        if (employees[i].attendance < minAttendance) {
            minAttendance = employees[i].attendance;
        }
    }

    result.innerText = "Minimum Attendance: " + minAttendance;
}

// Clear Inputs
function clearInputs(): void {
    (document.getElementById("empId") as HTMLInputElement).value = "";
    (document.getElementById("empName") as HTMLInputElement).value = "";
    (document.getElementById("empSalary") as HTMLInputElement).value = "";
    (document.getElementById("empAttendance") as HTMLInputElement).value = "";
}