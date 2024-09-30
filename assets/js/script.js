document.getElementById("ele1").addEventListener("click", (event) => {
  const ele = event.target;

  pintar(ele, "yellow");
});

function pintar(ele, color) {
  ele.style.backgroundColor = color;
}
