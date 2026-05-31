const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");

function drawing() {
  let div = document.querySelectorAll(".grid-column");

  div.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      e.style.backgroundColor = "black";
    });
  });
}

function makeGrid(input) {
  const size = 640/input;
  for (let i = 1; i <= input; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let j = 1; j <= input; j++) {
      const gridColumn = document.createElement("div");
      gridColumn.classList.add("grid-column");

      gridColumn.style.width = `${size}px`;
      gridColumn.style.height = `${size}px`;

      gridRow.append(gridColumn);
    }
    gridContainer.append(gridRow);
  }

  drawing();
}

makeGrid(16);

button.addEventListener("click", () => {
  let input = prompt("Masukkan grid yang anda mau (tidak lebih dari 100)");

  while (input < 0 || input > 100) {
    input = prompt("angka tidak valid");
  }

  gridContainer.replaceChildren();
  makeGrid(input);
});
