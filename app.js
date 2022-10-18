const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

createGrid();

function createGrid() {
  makeRows(16);
  makeCols(16);
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
