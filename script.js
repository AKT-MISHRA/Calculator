let displayElement = document.getElementById("display");
let currentInput = "";

// Append numbers to the display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Append operators to the display
function appendOperator(operator) {
    if (currentInput === "" || /[+\-*/]$/.test(currentInput)) {
        return; // Prevent consecutive operators
    }
    currentInput += operator;
    updateDisplay();
}

// Update the display with the current input
function updateDisplay() {
    displayElement.textContent = currentInput || "0";
}

// Clear the display
function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

// Delete the last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Perform the calculation
function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression
        updateDisplay();
    } catch {
        currentInput = "Error";
        updateDisplay();
        setTimeout(() => clearDisplay(), 2000); // Clear after showing error
    }
}
