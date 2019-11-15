function id(a) {
  const i = document.getElementById(a);
  return i;
}
const show = id("show");
const zero = id(0);
const one = id(1);
const two = id(2);
const three = id(3);
const four = id(4);
const five = id(5);
const six = id(6);
const seven = id(7);
const eight = id(8);
const nine = id(9);
const plus = id("plus");
const sub = id("sub");
const divi = id("divi");
const multi = id("multi");
const ac = id("ac");
const bang = id("bang");
const del = id("del");
const dot = id("dot");
// var save = show.value;
console.dir(zero);
function click(b) {
  b.addEventListener("click", () => {
    show.textContent += b.textContent;
    // show.valueAsNumber = show.value;
  });
}
click(zero);
click(one);
click(two);
click(three);
click(four);
click(five);
click(six);
click(seven);
click(eight);
click(nine);
click(plus);
click(divi);
click(multi);
click(sub);
click(dot);
console.dir(show);
console.log(typeof show.textContent);
var save;
bang.addEventListener("click", () => {
  save = show.textContent;
  show.textContent = eval(save);
  // console.dir(eval(save));
});
del.addEventListener("click", () => {
  show.textContent = show.textContent.slice(0, -1);
});
ac.addEventListener("click", () => {
  show.textContent = "";
});
