const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("#grid-slider");
const sizeLabel = document.querySelector("#grid-size-label");
const colorPicker = document.querySelector("#color-picker");

const toolButtons = document.querySelectorAll(".tool-btn");
const blackBtn = document.querySelector("#black-mode");
const colorBtn = document.querySelector("#color-mode");
const rainbowBtn = document.querySelector("#rainbow-mode");
const eraserBtn = document.querySelector("#eraser-mode");

const toggleGridBtn = document.querySelector("#toggle-grid");
const clearBtn = document.querySelector("#clear");

let currentMode = "black";
let customColor = "#3b82f6";
let isDrawing = false;
let showGridLines = true;

function makeGrid(size) {
  gridContainer.replaceChildren();

  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let j = 0; j < size; j++) {
      const gridColumn = document.createElement("div");
      gridColumn.classList.add("grid-column");
      gridRow.append(gridColumn);
    }

    gridContainer.append(gridRow);
  }
}

function drawing(cell) {
  if (currentMode === "black") {
    cell.style.backgroundColor = "black";
  } else if (currentMode === "color") {
    cell.style.backgroundColor = customColor;
  } else if (currentMode === "rainbow") {
    const randomHue = Math.floor(Math.random() * 360);
    cell.style.backgroundColor = `hsl(${randomHue}, 90%, 60%)`;
  } else if (currentMode === "eraser") {
    cell.style.backgroundColor = "transparent";
  }
}

function setActiveButton(selectedBtn) {
  toolButtons.forEach((btn) => btn.classList.remove("active"));
  selectedBtn.classList.add("active");
}

window.addEventListener("mousedown", (e) => {
  isDrawing = true;
  if (e.target.classList.contains("grid-column")) {
    drawing(e.target);
  }
});

gridContainer.addEventListener("mouseover", (e) => {
  if (isDrawing && e.target.classList.contains("grid-column")) {
    drawing(e.target);
  }
});

window.addEventListener("mouseup", () => {
  isDrawing = false;
});

gridContainer.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  sizeLabel.textContent = `${value} × ${value}`;
  makeGrid(value);
});

colorPicker.addEventListener("input", (e) => {
  customColor = e.target.value;
  currentMode = "color";
  setActiveButton(colorBtn);
});

colorBtn.addEventListener("click", () => {
  currentMode = "color";
  setActiveButton(colorBtn);
});

blackBtn.addEventListener("click", () => {
  currentMode = "black";
  setActiveButton(blackBtn);
});

rainbowBtn.addEventListener("click", () => {
  currentMode = "rainbow";
  setActiveButton(rainbowBtn);
});

eraserBtn.addEventListener("click", () => {
  currentMode = "eraser";
  setActiveButton(eraserBtn);
});

clearBtn.addEventListener("click", () => {
  const cells = gridContainer.querySelectorAll(".grid-column");
  cells.forEach((cell) => (cell.style.backgroundColor = "transparent"));
});

toggleGridBtn.addEventListener("click", () => {
  showGridLines = !showGridLines;
  if (showGridLines) {
    gridContainer.classList.remove("no-grid-lines");
    toggleGridBtn.classList.remove("danger-btn");
  } else {
    gridContainer.classList.add("no-grid-lines");
    toggleGridBtn.classList.add("danger-btn");
  }
});

makeGrid(16);
