// Generate random falling leaves
for (let i = 0; i < 10; i++) {
  let leaf = document.createElement("div");
  leaf.innerHTML = "🍂";
  leaf.style.position = "absolute";
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.top = "-5vh";
  leaf.style.fontSize = Math.random() * 20 + 20 + "px";
  leaf.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;
  document.body.appendChild(leaf);
}
