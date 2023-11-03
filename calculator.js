let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
    try {
      // Handle power equation replacement (x^y)
      display.value = display.value.replace(/(\d+)\^\(([^)]+)\)/g, function(match, base, exponent) {
        return Math.pow(parseFloat(base), parseFloat(exponent));
      });
  
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  

function calculateSin() {
    try{
    display.value = Math.sin(display.value);
} catch (error){
    display.value = "Error";
}
}

function calculateSin() {
    try{
    display.value = Math.cos(display.value);
} catch (error){
    display.value = "Error";
}
}

function calculateTan() {
    try{
    display.value = Math.tan(display.value);
} catch (error){
    display.value = "Error";
}
}

function calculateSqrt() {
    display.value = Math.sqrt(display.value, 2);
}

function calculateLog() {
    display.value = Math.log10(display.value);
}

function calculatePi() {
    display.value = 3.14159265359;
}

function calculateE() {
    display.value = 2.71828182846;
}

function backspc() {
    display.value = display.value.substr(0, display.value.length - 1);
}