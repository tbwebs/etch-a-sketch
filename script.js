const grid = document.getElementsByClassName('grid');
createGrid();
//creates grid
function createGrid(){
    for (x=0; x<256; x++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.innerText = 'hi';
        document.getElementById('etchasketch').appendChild(grid);
    }
}