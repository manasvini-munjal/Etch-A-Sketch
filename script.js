const GRID_SIZE = 16;
const GRID_CONTAINER_SIZE = 960;
const container = document.querySelector('.container');


const createGrid = (gridSize) => {
    const squareSize = `${GRID_CONTAINER_SIZE/gridSize}px`;
    container.setAttribute('style', `grid-template-columns:repeat(${gridSize}, 0fr)`)
    for(let i = 1; i <= gridSize * gridSize; i++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');
      grid.style.width = `${squareSize}`;
      grid.style.height = `${squareSize}`;

      grid.addEventListener('mouseover', () => {grid.style.background = 'red'});
      grid.addEventListener('mouseout', () => {grid.style.background = 'transparent'});
      container.appendChild(grid);
    }
}
40
const clearGrid = () => {
    const grids = document.querySelectorAll('.grid');
    if (grids) {
    grids.forEach(grid => {
        grid.parentNode.removeChild(grid);
    });
    }
}

const enterInput = () => {
  const userInput = prompt("Enter number of squares for new grid", "");
  const gridSize = parseInt(userInput);
  if(gridSize > 100) {
    prompt("Enter a number less an 100");
  } else if ( gridSize === GRID_SIZE) {
    prompt(`${gridSize} * ${gridSize} grid already exists!`)
  } else {
     clearGrid();
     createGrid(gridSize);
  }
}

const gridSize = document.querySelector('.grid-size');
gridSize.addEventListener('click', enterInput);
window.addEventListener('load', () => {
    createGrid(GRID_SIZE);
});

