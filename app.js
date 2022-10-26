const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let colorPicker = document.getElementById("colorpicker");
let eraser = document.getElementsByClassName("erase")
let size = 16;
let gridSize = 16 * 16;
let currentColor = "#000000";
let currentMode = "draw"

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
      cell.style.width = `${720 / numCells}px`;
      cell.style.height = `${720 / numCells}px`;
      rows[j].appendChild(cell).className = "cell";
    }
  }
}

colorPicker.oninput = (e) => setColor(e.target.value);


function setColor(color) {
  currentColor = color;
}

function setMode(mode) {
  currentMode = mode
}

function changeColor(event) {
  if (currentMode == "draw") {
    event.target.style.backgroundColor = currentColor;
  }

  if (currentMode == "erase") {
    event.target.style.backgroundColor = "white"
  }
}

function resetGrid() {
  size = prompt("Enter a number less than or equal to 100: ");

  if (size == undefined || size == 0 || size == "") {
    return;
  }

  while (size > 100) {
    size = prompt("Size must be less than or equal to 100. Enter number: ");
  }

  clearGrid();
  createGrid(size);
}

function clearGrid() {
  container.innerHTML = "";
}
