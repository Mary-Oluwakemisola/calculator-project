let currentNumber = '';
const inputEl = document.getElementById('display');
const operators = '';

function appendNumber(val){
    currentNumber += val;
    inputEl.value = currentNumber;
}

function operate(op){
    currentNumber += op;
    inputEl.value = currentNumber;
}

function calculate(){
  currentNumber =   eval(inputEl.value);
  inputEl.value = currentNumber;
}
function clearDisplay(){
inputEl.value = '';
currentNumber = '';
operators = '';
}




 