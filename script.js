let container = document.getElementById('etchasketch');
let clearButton = document.getElementById('clearbutton');
let resizeButton = document.getElementById('resize');
let colorButton = document.getElementById('randomcolor');
let greyButton = document.getElementById('greybutton');

createGrid(16);
//greyFill();

//greyButton.addEventListener('click', greyFill);
clearButton.addEventListener('click', clearBoard);
resizeButton.addEventListener('click', resize);

//creates grid
function createGrid(num){
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (x=0; x<(num * num); x++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'grey');
        container.appendChild(grid);
        }
}
//clears the board
function clearBoard(){
    let newBoard = document.getElementsByClassName('grid');
    for (i = 0; i < newBoard.length; i++){
        newBoard[i].style.backgroundColor = "white";
    }
}

//prompts user to resize the grid and clear board
function resize(){
    let newSize = document.getElementsByClassName('grid');
    while (newSize.length > 0){
        newSize[0].parentNode.removeChild(newSize[0]);
    }
    let num = prompt("Enter a number between 1 and 100 to resize the grid", "16");
    createGrid(num);
}

//fills boxes with increasing opacity of grey
// function greyFill(){
//     let grid = document.querySelector('.grid');
//     grid.addEventListener('mouseover', (e) => {
//         if (e.target.classList.contains('grid') == false){
//             if (e.target.classList.contains('greyfill')){
//                 let opacity = parseFloat(e.target.style.opacity) + 0.1;
//                 e.target.style.opacity = opacity;
//             } else{
//                 e.target.classList.add('greyfill');
//                 e.target.style.opacity = 0.1;
//             }
//         }
//     })
// }

// function colorFill(){

// }

// function randomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let rgb = rgb(red,green,blue);
//     return rgb;
// }