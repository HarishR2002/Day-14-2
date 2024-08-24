const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        handleButtonClick(value);
    });
});

function handleButtonClick(value) {
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else {
        appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    try {
        let result = eval(display.innerText);
        if (!isFinite(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = 'Error';
    }
}
