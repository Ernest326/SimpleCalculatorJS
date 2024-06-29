const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay(clearAll) {
    if(clearAll) {
        display.value = ""
    } else {
        display.value = display.value.substr(0,display.value.length-1)
    }
}