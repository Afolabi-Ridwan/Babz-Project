let imageSwitch = document.querySelector("#first-image");
let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let times = document.getElementById("times");
let carts = document.getElementById("cart");
let a = times.classList.contains("active");
let x = window.matchMedia("(max-width: 414px)");

bars.addEventListener("click", function () {
  navbar.classList.add("toggle");
  bars.style.display = "none";
  // times.style.display = "block";
  times.classList.add("active");
  if (a === false) {
    carts.style.marginRight = "5px";
    // carts.style.marginTop = "-2px";
  }
});

times.addEventListener("click", function () {
  toggleTimes();
});

// bars.addEventListener("click", function () {
//   menu.classList.add("toggle");
// });

function toggleTimes() {
  navbar.classList.remove("toggle");
  times.classList.remove("active");
  bars.style.display = "block";
  bars.style.position = "relative";
  bars.style.right = "-45px";
  bars.style.top = "-52px";

  if (x.matches) {
    bars.style.right = "-33px";
    bars.style.top = "-10px";
  } else {
  }
}
