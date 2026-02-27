let display = document.getElementById("display") as HTMLInputElement;

function press(value: string): void {
  display.value += value;
}

function clearDisplay(): void {
  display.value = "";
}

function calculate(): void {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Make functions available to HTML
(window as any).press = press;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;
