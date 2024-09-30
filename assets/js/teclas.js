const div = document.getElementById("key");

let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    div.style.backgroundColor = "pink";
  } else if (event.key === "s" || event.key === "S") {
    div.style.backgroundColor = "orange";
  } else if (event.key === "d" || event.key === "D") {
    div.style.backgroundColor = "lightblue";
  } else if (event.key === "q" || event.key === "Q") {
    nuevoItem("purple");
  } else if (event.key === "w" || event.key === "W") {
    nuevoItem("brown");
  } else if (event.key === "e" || event.key === "E") {
    nuevoItem("grey");
  }
});

function nuevoItem(color) {
  const item = document.createElement("div");
  item.style.width = "200px";
  item.style.height = "200px";
  item.style.border = "solid black";
  item.style.backgroundColor = color;
  document.body.appendChild(item);
}
