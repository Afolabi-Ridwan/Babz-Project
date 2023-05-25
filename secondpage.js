const menCheckBox = document.getElementsByClassName("menCheckbox");
// const checkBox = document.querySelectorAll("input");
const numberOfItemsForMen = document.querySelector(".menItemNumber");
let a = 1;

// second page
for (let i = 0; i < 36; i++) {
  menCheckBox[i].addEventListener("click", function () {
    if (menCheckBox[i].checked) {
      // alert("added to carts");
      console.log(menCheckBox[i].checked);
      numberOfItemsForMen.value = a++;
      // console.log(a);
    } else {
      // alert("removed from carts");
      // console.log(a--);
      console.log(menCheckBox[i].checked);

      numberOfItemsForMen.value = a--;
    }
  });
  // const checkBoxCondition = checkBox[i].attributes("");
  // if (checkBoxCondition === true) {
  //   console.log("checked");
  // } else {
  // }
}
// second page
