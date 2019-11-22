var promise1 = () => {
  var data = "promise iz da best";
  var newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });

  newPromise.then(messenge => {
    console.log(messenge);
  });
  // return newPromise;
};
promise1();

// var promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise iz da best");
//   }, 5000);
// });
// promise1.then(mess => {
//   console.log(mess);
// });
