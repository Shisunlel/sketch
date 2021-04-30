const wrapper = document.createElement("div");
const header = document.createElement("h1");
const sketch = document.createElement("div");
const footer = document.createElement("footer");
const footer_span = document.createElement("span");
const footer_author = document.createElement("a");
const footer_text = document.createTextNode(" - Create by ");

const appendBody = (appendItemToSketch) => {
  //add element to body
  header.textContent = "Etch-a-Sketch";
  footer_span.textContent = new Date().toLocaleDateString().slice(-4);
  footer_author.href = "//github.com/shisunlel";
  footer_author.innerText = "Shisun";
  footer.append(footer_span, footer_text, footer_author);
  wrapper.append(header, sketch, footer);
  wrapper.className = "wrapper";
  sketch.className = "sketch";
  appendItemToSketch();
  document.body.append(wrapper);
};

const appendItemToSketch = () => {
  //get sketch custom variable thru compute style
  const sketchSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--size");

  let i = Math.pow(parseInt(sketchSize), 2);
  while (i > 0) {
    const sketchItem = document.createElement("div");
    sketchItem.className = "item";
    sketch.append(sketchItem);
    i--;
  }
};

appendBody(appendItemToSketch);

const sketchItem = document.querySelector(".sketch").childNodes;
sketchItem.forEach((e) => {
  ["mouseover", "touchmove"].forEach((evt) => {
    e.addEventListener(evt, (e) => {
      setTimeout(() => {
        e.target.classList.toggle("item_too");
      }, 100);
    });
  });
});
