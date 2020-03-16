const addButton = document.querySelector('.button1');
const subtractButton = document.querySelector('.button2');

console.log(addButton, subtractButton);

function addNumbers() {
    // Select the element we want to update
   let numbers = document.getElementById("update").innerHTML;
   console.log(numbers);
   // Incrament the selected element
   numbers++;
   console.log(numbers);
   // Update the webpage and LET variable
   document.getElementById("update").innerHTML = numbers;
   console.log(numbers);
}

function subtractNumber() {
    // Select the element we want to update
    let numbers = document.getElementById("update").innerHTML;
    console.log(numbers);
    // Subtract the selected element
    numbers--;
    console.log(numbers);
    // Update the webpage and LET variable
    document.getElementById("update").innerHTML = numbers;
}

// Event listeners

addButton.addEventListener('click', addNumbers);
subtractButton.addEventListener('click', subtractNumber);

