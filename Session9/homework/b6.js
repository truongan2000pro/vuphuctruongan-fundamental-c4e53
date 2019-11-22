const data = fetch("http://quotes.rest/qod.json");
const dom = document.getElementById("show");
var all = {};
data
  .then(database => {
    return database.json();
  })
  .then(show => {
    var qoute = show.contents.quotes[0].quote;
    console.log(qoute);
    all.qoute = qoute;
    var author = show.contents.quotes[0].author;
    all.author = author;
    console.log(author);
    dom.innerHTML += `<h2>${all.qoute}</h2>
    <h4  >${all.author}</h4>`;
    return author, qoute;
  });
