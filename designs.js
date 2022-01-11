// Select color input
const gridColor = document.querySelector('#colorPicker');
// Select size input
const size = document.querySelector('#sizePicker');
const grid = document.querySelector('#pixelCanvas');

size.addEventListener('submit', function(e){
    e.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});



// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {

// Your code goes here!
    grid.innerHTML = '';
    for (let i = 1; i <= x; i++){
        const tr = document.createElement('tr');
        tr.id = 'table' + i;
        grid.appendChild(tr);
        for (let j = 1; j <= y; j++){
            const td = document.createElement('td');
            tr.appendChild(td);
        }
    }

    // add color to each tr
    grid.addEventListener('click', function addColor(e){
        if (e.target.nodeName === 'TD'){
            e.target.style.backgroundColor = gridColor.value;
        }
    });

}
