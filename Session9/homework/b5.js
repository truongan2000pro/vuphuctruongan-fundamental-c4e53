const distanceMath = (a, b, c, d) => {
  console.log(Math.sqrt(Math.pow(a - b, 2) + Math.pow(c - d, 2)));
};
const d = distanceMath(3, 10, 0, 6);
if (d !== 5) {
  console.log("‘Failed: the calculation is wrong’");
} else {
  console.log("‘Passed, bravo’");
}
