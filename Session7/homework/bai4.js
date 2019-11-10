const colum1 = document.getElementById("tr1");
const colum2 = document.getElementById("tr2");
const change = document.getElementById("click");
const body = document.getElementById("body");
let inputRaw = Number(prompt("vi tri raw"));
let inputColum = Number(prompt("vi tri colum"));
let input = prompt("nhap vao content");
console.dir(colum1);
console.dir(colum2);
console.dir(body);
change.addEventListener("click", () => {
  body.children[inputRaw - 1].children[inputColum - 1].textContent = input;
});
