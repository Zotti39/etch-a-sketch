const container = document.querySelector('#container');
const gridSize = 16;
const botao = document.querySelector('#botao');

window.addEventListener("DOMContentLoaded", function(){
    for(let i = 1; i <= gridSize; i++){
        const newLine = document.createElement('div');
        newLine.setAttribute('class', 'linha');
        for(let j = 1; j <= gridSize; j++){
            const newColumn = document.createElement('div');
            newColumn.setAttribute('class', 'coluna');
            newColumn.textContent = `Linha${i} Coluna${j}`;
            newLine.appendChild(newColumn);
        }
        container.appendChild(newLine);
    }
})