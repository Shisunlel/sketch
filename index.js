const date = document.querySelector("#date");
date.textContent = new Date().toLocaleDateString().slice(-4);
const grid = document.querySelector(".grid_container");
const reset = document.querySelector("#reset");

const appendItemToSketch = (opt) => {
  //get sketch custom variable thru compute style
  const containerSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--size");

  let i = Math.pow(parseInt(containerSize), 2);
  while (i > 0) {
    const gridItem = document.createElement("div");
    gridItem.classList = "grid_item";
    grid.append(gridItem);
    i--;
  }
  addMouseOverandTouchStart();
};

document.body.onload = appendItemToSketch(addMouseOverandTouchStart);

function addMouseOverandTouchStart() {
  const gridItem = document.querySelector(".grid_container").childNodes;

  gridItem.forEach((e) => {
    e.addEventListener("mouseover", (e) => {
      e.target.classList.toggle("grid_item_too");
      e.stopPropagation();
    });
  });
}

reset.onclick = () => {
  const gridItem = document.querySelector(".grid_container").childNodes;
  Array.from(gridItem).forEach((e) => {
    grid.removeChild(e);
  });
  grid.style.setProperty("--size", "16");
  appendItemToSketch(addMouseOverandTouchStart);
};
