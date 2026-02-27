var employees = [];
// Add Employee (Scan)
function addEmployee() {
    var idInput = document.getElementById("empId");
    var nameInput = document.getElementById("empName");
    var salaryInput = document.getElementById("empSalary");
    var attendanceInput = document.getElementById("empAttendance");
    var id = Number(idInput.value);
    var name = nameInput.value.trim();
    var salary = Number(salaryInput.value);
    var attendance = Number(attendanceInput.value);
    var result = document.getElementById("result");
    // Basic Validation
    if (!id || !name || !salary || !attendance) {
        result.innerText = "Please fill all fields correctly.";
        return;
    }
    // Check duplicate ID
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            result.innerText = "Employee ID already exists.";
            return;
        }
    }
    var employee = { id: id, name: name, salary: salary, attendance: attendance };
    employees.push(employee);
    displayEmployees();
    clearInputs();
    result.innerText = "Employee added successfully!";
}
// Display Employees in Table
function displayEmployees() {
    var tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";
    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        var row = "\n            <tr>\n                <td>".concat(emp.id, "</td>\n                <td>").concat(emp.name, "</td>\n                <td>").concat(emp.salary, "</td>\n                <td>").concat(emp.attendance, "</td>\n            </tr>\n        ");
        tableBody.innerHTML += row;
    }
}
// Search Employee (No .find())
function searchEmployee() {
    var searchId = Number(document.getElementById("searchId").value);
    var result = document.getElementById("result");
    var foundEmployee = null;
    for (var i = 0; i < employees.length; i++) {
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
    }
    else {
        result.innerText = "Employee not found.";
    }
}
// Max Salary (No spread operator)
function calculateMaxSalary() {
    var result = document.getElementById("result");
    if (employees.length === 0) {
        result.innerText = "No employees available.";
        return;
    }
    var maxSalary = employees[0].salary;
    for (var i = 1; i < employees.length; i++) {
        if (employees[i].salary > maxSalary) {
            maxSalary = employees[i].salary;
        }
    }
    result.innerText = "Maximum Salary: " + maxSalary;
}
// Min Attendance (No spread operator)
function calculateMinAttendance() {
    var result = document.getElementById("result");
    if (employees.length === 0) {
        result.innerText = "No employees available.";
        return;
    }
    var minAttendance = employees[0].attendance;
    for (var i = 1; i < employees.length; i++) {
        if (employees[i].attendance < minAttendance) {
            minAttendance = employees[i].attendance;
        }
    }
    result.innerText = "Minimum Attendance: " + minAttendance;
}
// Clear Inputs
function clearInputs() {
    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empAttendance").value = "";
}
