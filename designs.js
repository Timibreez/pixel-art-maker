// Select color input
const gridColor = document.querySelector('#colorPicker');
// Select size input
const size = document.querySelector('#sizePicker');
// declare global variables
const grid = document.querySelector('#pixelCanvas');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

size.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {

// Your code goes here!
    e.preventDefault();
    grid.innerHTML = '';
    for (let i = 1; i <= height.value; i++){
        const tr = document.createElement('tr');
        tr.id = 'table' + i;
        
        for (let j = 1; j <= width.value; j++){
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }

    // add color to each tr
    grid.addEventListener('click', function addColor(e){
        if (e.target.nodeName === 'TD'){
            e.target.style.backgroundColor = gridColor.value;
        }
    });

}
