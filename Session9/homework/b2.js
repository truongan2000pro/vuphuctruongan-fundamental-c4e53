const url =
  "https://reqres.in/api/users?page=2&fbclid=IwAR1TkYaxQpSdZ-QSZVi2VX1xRDnWfU3r0W0nv3qA3YjdfEyxdty6A2zfLg4";

const fetchPromise = new Promise((resolve, reject) => {
  resolve(fetch(url));
});
gotData = () => {};
fetchPromise
  .then(connection => {
    console.log("Connected");
    return connection.json();
  })
  .then(respone => {
    console.log(respone.data);
  });
