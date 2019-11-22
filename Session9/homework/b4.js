const ramdomNumber = (a, b) => {
  console.log(Math.floor(Math.random() * (b + 1 - a) + a));
};
const x = ramdomNumber(4, 16);
if (x < 4) {
  console.log("‘Failed: the number is smaller than 4’");
} else if (x > 16) {
  console.log("‘Failed: the number is bigger than 16’");
} else {
  console.log("‘Passed, bravo’");
}
