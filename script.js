
const grid = document.querySelector('.grid-container');

function createColumn(size) {
    let column = document.createElement('div');
    column.setAttribute('class', 'column');
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: red');
        });
        column.appendChild(square);
    }
    return (column);
}

function createGrid(size) {

    for (let i = 0; i < size; i++) {
        grid.appendChild(createColumn(size));
    }
}

const submit = document.querySelector('.submit');

const sizeInput = document.querySelector('#size');

submit.addEventListener('click', () => {
    if (sizeInput.value > 100) {
        alert('Grid cannot be larger than 100x100');
    } else {
        grid.textContent = '';
        createGrid(sizeInput.value);
    }

});




