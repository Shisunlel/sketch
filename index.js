const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
const grid = document.querySelector(".grid_container");
const reset = document.querySelector("#reset");
const containerSize = getComputedStyle(
  document.documentElement
).getPropertyValue("--size");

function generateRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setGridItemColor(randomColor, targetNode) {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  targetNode.target.style.setProperty("--red", `${red}`);
  targetNode.target.style.setProperty("--green", `${green}`);
  targetNode.target.style.setProperty("--blue", `${blue}`);
}

function addMouseOverandTouchStart() {
  const gridItem = document.querySelector(".grid_container").childNodes;

  gridItem.forEach((e) => {
    e.addEventListener("mouseover", (e) => {
      setGridItemColor(generateRandomColor, e);
      e.target.classList.toggle("grid_item_too");
      e.stopPropagation();
    });
  });
}

function setGridSize() {
  let size = prompt("Set Box Size (1 ~ 30)");
  while (isNaN(size) || Number(size) < 1 || Number(size) > 30) {
    size = prompt("Set Box Size (1 ~ 30)");
  }
  return Number(size);
}

const appendItemToSketch = (mouseEvent, size) => {
  let i = Math.pow(parseInt(size), 2);
  while (i > 0) {
    const gridItem = document.createElement("div");
    gridItem.classList = "grid_item";
    grid.append(gridItem);
    i--;
  }
  mouseEvent();
};

document.body.onload = appendItemToSketch(
  addMouseOverandTouchStart,
  containerSize
);

reset.onclick = () => {
  const gridItem = document.querySelector(".grid_container").childNodes;
  //remove old item
  Array.from(gridItem).forEach((e) => {
    grid.removeChild(e);
  });
  //set new grid
  const size = setGridSize();
  grid.style.setProperty("--size", `${size}`);
  appendItemToSketch(addMouseOverandTouchStart, `${size}`);
};
