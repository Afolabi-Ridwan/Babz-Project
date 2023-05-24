let imageSwitch = document.querySelector("#first-image");
let bars = document.getElementById("bars");
let navbar = document.getElementById("navbar");
let wholeNavbar = document.querySelector(".navbar");
let times = document.getElementById("times");
let carts = document.getElementById("cart");
let cartItems = document.querySelectorAll(".cart-items");
let cartAmount = document.querySelector("#cart-amount");
let cartAdded = document.querySelector("#cart-added");
let radio = document.getElementById("radio");
let hr = document.getElementById("hr");
let a = times.classList.contains("active");
let x = window.matchMedia("(max-width: 414px)");
let b = 1;

for (let i = 0; i < 36; i++) {
  cartItems[i].addEventListener("click", function () {
    if (b < 37) {
      const k = b++;
      cartAmount.textContent = k;

      // cartAdded.classList.add("active");
      // hr.classList.add("active");
      // cartAdded.classList.remove("active");

      // cartAdded.classList.add("remove");
    } else {
    }
  });
  // cartAdded.classList.remove("active");
}

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

  cartAmount.style.right = "60px";
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
