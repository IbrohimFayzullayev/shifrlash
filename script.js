const inputShifr = document.querySelector(".input1");
const inputDeshifr = document.querySelector(".input2");
const btnShifr = document.querySelector(".btn1");
const btnDeshifr = document.querySelector(".btn2");
const natija1 = document.querySelector(".result1");
const natija2 = document.querySelector(".result2");
let str, shif;
btnShifr.addEventListener("click", function () {
  str = inputShifr.value;
  let id = [],
    r = [];
  for (let i = 0; i < str.length; i++) {
    id.push(str.charCodeAt(i));
  }
  for (let i = 0; i < id.length; i++) {
    r.push(id[i].toString(2));
  }
  natija1.textContent = r.join(",");
});
btnDeshifr.addEventListener("click", function () {
  shif = String(inputDeshifr.value).split(",");
  let d = [];
  for (let i = 0; i < shif.length; i++) {
    let n = Number(shif[i].toString(10));
    let s = parseInt(n, 2);
    d.push(String.fromCharCode(s));
  }
  natija2.textContent = d.join("");
});
