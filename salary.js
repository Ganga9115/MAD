var latestReport = "";
function generateReport() {
    var name = document.getElementById("name").value;
    var dept = document.getElementById("dept").value;
    var regno = document.getElementById("regno").value;
    var basicPay = Number(document.getElementById("basic").value);
    var daysPresent = Number(document.getElementById("days").value);
    var TOTAL_DAYS = 30;
    var hra = basicPay * 0.10;
    var dns = basicPay * 0.12;
    var travel = basicPay * 0.05;
    var grossSalary = basicPay + hra + dns + travel;
    var perDaySalary = grossSalary / TOTAL_DAYS;
    var attendanceDeduction = perDaySalary * (TOTAL_DAYS - daysPresent);
    var incomeTax = 500;
    var netSalary = grossSalary - attendanceDeduction - incomeTax;
    latestReport = "\n    SALARY REPORT\n    ===============================\n    Name : ".concat(name, "\n    Department : ").concat(dept, "\n    Register No : ").concat(regno, "\n    Basic Pay : \u20B9").concat(basicPay.toFixed(2), "\n    HRA (10%) : +\u20B9").concat(hra.toFixed(2), "\n    DNS (12%) : +\u20B9").concat(dns.toFixed(2), "\n    Travel Allowance : +\u20B9").concat(travel.toFixed(2), "\n    Gross Salary : \u20B9").concat(grossSalary.toFixed(2), "\n    Attendance Deduction: -\u20B9").concat(attendanceDeduction.toFixed(2), "\n    Income Tax : -\u20B9").concat(incomeTax.toFixed(2), "\n    NET SALARY : \u20B9").concat(netSalary.toFixed(2), "\n    Days Present: ").concat(daysPresent, "/").concat(TOTAL_DAYS, "\n    ===============================\n    ");
    document.getElementById("output").innerText = latestReport;
}
function downloadPDF() {
    if (!latestReport) {
        alert("Please generate the report first");
        return;
    }
    // @ts-ignore
    var jsPDF = window.jspdf.jsPDF;
    var pdf = new jsPDF();
    pdf.setFont("courier");
    pdf.setFontSize(11);
    pdf.text(pdf.splitTextToSize(latestReport, 180), 10, 20);
    pdf.save("Salary_Report.pdf");
}
document.getElementById("btn").addEventListener("click", generateReport);
document.getElementById("pdfBtn").addEventListener("click", downloadPDF);