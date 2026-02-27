var display = document.getElementById("display");
function press(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (_a) {
        display.value = "Error";
    }
}
// Make functions available to HTML
window.press = press;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
