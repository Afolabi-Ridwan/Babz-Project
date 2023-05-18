let imageSwitch = document.querySelector("#first-image");
let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let wholeNavbar = document.querySelector(".navbar");
let times = document.getElementById("times");
let carts = document.getElementById("cart");
let a = times.classList.contains("active");
let x = window.matchMedia("(max-width: 414px)");

window.addEventListener("scroll", function () {
  wholeNavbar.classList.toggle("sticky", this.window.scrollY > 0);

  wholeNavbar.style.zIndex = "1000";
});

bars.addEventListener("click", function () {
  navbar.classList.add("toggle");
  bars.style.display = "none";
  times.classList.add("active");

  if (a === false) {
    carts.style.marginRight = "15px";
  }
});

times.addEventListener("click", function () {
  toggleTimes();
});

function toggleTimes() {
  navbar.classList.remove("toggle");
  times.classList.remove("active");
  bars.style.display = "block";
  bars.style.position = "relative";
  bars.style.right = "-45px";
  bars.style.left = "45px";
  navbar.style.paddingBottom = "-100px";

  if (x.matches) {
    bars.style.right = "-33px";
    bars.style.top = "-10px";
    // bars.style.paddingBottom = "10px";
  } else {
    // bars.style.display = "none";
  }
}
