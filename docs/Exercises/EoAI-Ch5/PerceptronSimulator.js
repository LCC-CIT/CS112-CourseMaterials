/* Perceptron simulator for CS 112
   Written by Brian Bird, Fall 2024
*/

const array = Array.from({ length: 5 }, () => Array(5).fill(0));

window.onload = function () {
    updateTable();
    addClickHandlers();
};

function updateTable() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            if (cell) {
                cell.textContent = array[i][j];
            }
        }
    }
}

function addClickHandlers() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            if (cell) {
                cell.addEventListener('click', function () {
                    array[i][j] = array[i][j] === 0 ? 1 : array[i][j] === 1 ? -1 : 0;
                    cell.textContent = array[i][j];
                    const count = recognizeFaces();
                    document.getElementById('recognized').textContent = count;
                    document.getElementById("validation").textContent = String.fromCharCode(65 + count);
                });
            }
        }
    }
}

function perceptron(input, weights) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i] * weights[i];
    }
    return sum > 0 ? 1 : -1;
}

function getWeightsFromTable() {
   // Get the weights from the table with id 'weights'
    const htmlTable = document.getElementById('weights');
    const cells = htmlTable.querySelectorAll('td');
    const weights = [];
    for (let i = 0; i < cells.length; i++) {
        weights.push(Number(cells[i].textContent));
    }
    return weights;
}

function getArrayFromTable(htmlTable) {
    // Find the td elements with a sad or happy class
    const cells = htmlTable.querySelectorAll('td');
    const input = [];
    for (let i = 0; i < cells.length; i++) {
        // set the element in input array to 1 if the cell has a happy or sad class
        // set the element in input array to 0 if the cell has neither class
        if (cells[i].classList.contains('happy') || 
            cells[i].classList.contains('sad')) {
            input.push(1);
        } else {
            input.push(0);
        }
    }
    return input;
}

function recognizeFaces() {
    let numberRecognized = 0;
    // In a loop, get an input array from the happy face tables h1 through h8
    // Use the perceptron function to determine if the face is happy or sad
    // If a table is recognized as happy, make it opaque
    for (let i = 1; i <= 8; i++) {
        const tableId = `h${i}`;
        const table = document.getElementById(tableId);
        const inputArray = getArrayFromTable(table);
        const weights = getWeightsFromTable();
        if (perceptron(inputArray, weights) === 1) {
            table.style.opacity = 1;
            numberRecognized++;
        }
        else {
            table.style.opacity = 0.5;
        }
    }
    // Repeat the loop for the sad face tables s1 through s8
    for (let i = 1; i <= 8; i++) {
        const tableId = `s${i}`;
        const table = document.getElementById(tableId);
        const inputArray = getArrayFromTable(table);
        const weights = getWeightsFromTable();
        if (perceptron(inputArray, weights) === -1) {
            table.style.opacity = 1;
            numberRecognized++;
        }
        else {
            table.style.opacity = 0.5;
        }
    }
    return numberRecognized;
}
