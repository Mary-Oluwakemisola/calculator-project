function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

  console.log("After showing + button");
// Your code to show the + button
console.log("Before showing + button");

{
  const display = document.querySelector('+').value ='';
   display: none;
 }