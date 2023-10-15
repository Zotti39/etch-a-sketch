const container = document.querySelector('#container');
const botao = document.querySelector('#botao');
let gridSize = 16;
//function that return a random color (part of the XtraCredit1)
function randomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//XtraCredit1 function
function randomBack(item){
    const targetElement = item.target;
    const corAleatoria = randomColor();
    targetElement.style.cssText = `background-color: ${corAleatoria};`;
}
// Function to make the grid
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
    //Calling de Xtra1 credit function
    const gridArray = document.querySelectorAll(".coluna");
    gridArray.forEach(function(item) {
        item.addEventListener("click", randomBack);
    });
}
//Loads the function as soon as the page loads
document.addEventListener('DOMContentLoaded', grid);
//Function of the button, used to make a new grid
botao.addEventListener("click", function(){
    gridSize = parseInt(prompt("What size do you want the grid to be?", "Number..."));
    container.innerHTML = "";
    grid();
})