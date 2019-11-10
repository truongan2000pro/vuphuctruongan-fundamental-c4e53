const web = document.getElementById("website");
const clickValue = document.getElementById("clickValue");
const input = document.getElementById("input");
const select = document.getElementById("select");
const remove = document.getElementById("remove");
console.dir(web);
console.dir(select);
clickValue.addEventListener("click", () => {
  input.value = web.href;
});
let len = select.selectedOptions.length;
remove.addEventListener("click", () => {
  select.removeChild(select.selectedOptions[0]);
});
