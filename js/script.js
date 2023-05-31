"use strict";
let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
window.onload = () => {
  let panels = document.querySelectorAll(".panel");
  let i = 0;
  for (let panel of panels) {
    let wraper = () => {
        expand(panel);
      }
    panel.addEventListener("click", wraper);
    panel.style.backgroundImage = `url(${images[i]})`;
    ++i;
  }
  document.getElementById("date").textContent = new Date().getFullYear();
}

function expand(panel) {
  let prev = document.querySelector(".expanded");
  if(prev && prev !== panel) {
    prev.classList.toggle("expanded");
  }
  panel.classList.toggle("expanded");
}
