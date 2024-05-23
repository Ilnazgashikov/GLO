const square = document.getElementById('square');
const circle = document.getElementById('circle');
const inputText = document.querySelector('input[type=text]');
const button = document.querySelector('button');
const inputRange = document.querySelector('input[type=range]');
const hideButton = document.getElementById('e_btn');
const textValue = document.getElementById('range-span');

hideButton.style.display = 'none';

button.addEventListener('click', event => {
    if (inputText.value) {
        square.style.backgroundColor = inputText.value; 
    }
});

inputRange.addEventListener('input', event => {
    circle.style.width = inputRange.value + "%";
    circle.style.height = inputRange.value + "%";
    textValue.textContent = inputRange.value;
});