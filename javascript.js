const container = document.querySelector('#container');
const botao = document.querySelector('#botao');
let gridSize = 16;

// function to make the grid
function grid(){
    for(let i = 1; i <= gridSize; i++){
        const newLine = document.createElement('div');
        newLine.setAttribute('class', 'linha');
        for(let j = 1; j <= gridSize; j++){
            const newColumn = document.createElement('div');
            newColumn.setAttribute('class', 'coluna');
            newColumn.innerHTML = `Linha${i}<br>Coluna${j}`;
            newLine.appendChild(newColumn);
        }
        container.appendChild(newLine);
    }
}
//Loads the function as soon as the page loads
window.addEventListener('DOMContentLoaded', grid);

//function of the button, used to make a new grid
botao.addEventListener("click", function(){
    gridSize = parseInt(prompt("What size do you want the grid to be?", "Number..."));
    container.innerHTML = "";
    grid();
})