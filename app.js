const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = 16;
let gridSize = size * size;

createGrid(size);

function createGrid(size) {
  makeRows(size);
  makeCols(size);
}

function makeRows(numRows) {
  for (i = 0; i < numRows; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeCols(numCells) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < numCells; j++) {
      let cell = document.createElement("div");
      cell.addEventListener("mouseover", changeColor);
      cell.addEventListener("mousedown", changeColor);
      cell.style.width = `${720 / numCells}px`;
      cell.style.height = `${720 / numCells}px`;
      rows[j].appendChild(cell).className = "cell";
    }
  }
}

mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(event) {
  if (event.type == "mouseover" && !mouseDown) {
    return;
  }

  event.target.style.backgroundColor = "black";
}

function resetGrid() {
  size = prompt("Enter a number less than or equal to 64: ");

  if (size == undefined || size == 0 || size == "") {
    return;
  }

  while (size > 64) {
    size = prompt("Size must be less than or equal to 64. Enter number: ");
  }

  clearGrid();
  createGrid(size);
}

function clearGrid() {
  container.innerHTML = "";
}
