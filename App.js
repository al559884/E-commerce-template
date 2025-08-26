let bar = document.getElementById("bar");
let nav = document.getElementById("nav");
let overlay = document.getElementById("overlay");
let close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("block");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
        overlay.classList.remove("block");
    nav.classList.remove("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    close.classList.remove("block");
    overlay.classList.remove("block");

    nav.classList.remove("active");
  });
}
