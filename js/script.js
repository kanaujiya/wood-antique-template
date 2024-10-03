const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 150);
});

const scrolltop = document.querySelector(".scroll-btn");
scrolltop.onclick = () => {
  window.scroll(0, 0);
};

let navlinks = document.querySelector(".navlinks");
let menu = document.querySelector("#menu-icon");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlinks.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlinks.classList.remove("open");
};
