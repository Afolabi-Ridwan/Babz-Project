const menCheckBox = document.getElementsByClassName("menCheckbox");
const womenCheckBox = document.getElementsByClassName("womenCheckbox");
const kidsCheckBox = document.getElementsByClassName("kidsCheckbox");
const jewelryCheckBox = document.getElementsByClassName("jewelryCheckbox");
// const checkBox = document.querySelectorAll("input");
let numberOfItemsForMen = document.getElementById("menItemNumber");
let numberOfItemsForWomen = document.getElementById("womenItemNumber");
let numberOfItemsForKids = document.getElementById("kidsItemNumber");
let numberOfItemsForJewelry = document.getElementById("jewelryItemNumber");
let a = 1;
let b = 1;
let c = 1;
let d = 1;

// second page
for (let i = 0; i < 36; i++) {
  menCheckBox[i].addEventListener("click", function () {
    if (menCheckBox[i].checked) {
      // alert("added to carts");
      console.log(menCheckBox[i].checked);
      numberOfItemsForMen.textContent = a++;
    } else {
      console.log(menCheckBox[i].checked);

      numberOfItemsForMen.textContent = a--;
    }
  });

  womenCheckBox[i].addEventListener("click", function () {
    if (womenCheckBox[i].checked) {
      // alert("added to carts");
      console.log(womenCheckBox[i].checked);
      numberOfItemsForWomen.textContent = b++;
    } else {
      console.log(womenCheckBox[i].checked);

      numberOfItemsForWomen.textContent = b--;
    }
  });

  kidsCheckBox[i].addEventListener("click", function () {
    if (kidsCheckBox[i].checked) {
      // alert("added to carts");
      console.log(kidsCheckBox[i].checked);
      numberOfItemsForKids.textContent = c++;
    } else {
      console.log(kidsCheckBox[i].checked);

      numberOfItemsForKids.textContent = c--;
    }
  });

  jewelryCheckBox[i].addEventListener("click", function () {
    if (jewelryCheckBox[i].checked) {
      // alert("added to carts");
      console.log(jewelryCheckBox[i].checked);
      numberOfItemsForJewelry.textContent = d++;
    } else {
      console.log(jewelryCheckBox[i].checked);

      numberOfItemsForJewelry.textContent = d--;
    }
  });
}
// second page
