const container = document.querySelector('#container');

function createGrid() {
    pixels = prompt('How many pixels? (10-100) ') ** 2;
    while (pixels > 10000 || pixels < 100) {
        pixels = prompt('Choose a number between 10 and 100') ** 2;
    };
    container.style.cssText = `grid-template-columns: repeat(${pixels**(1/2)}, auto)`;
    for (i=0; i<pixels; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        
};
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

createGrid();

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        brightness = 1
        cell.style.background = getRandomColor();
    });
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    location.reload();
});
