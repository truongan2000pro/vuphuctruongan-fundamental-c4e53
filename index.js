const db = firebase.firestore();
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  db.collection("todoItem")
    .add({
      content: inputValue,
      stage: false
    })
    .then(function(docRef) {
      // add successfully -> continue to append
      console.log("Document written with ID: ", docRef.id);
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === "") {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}
const todoItem = db
  .collection("todoItem")
  .get()
  .then(data => {
    // render data [doc, doc2....]
    data.forEach(element => {
      console.log(element.data());
      var li = document.createElement("li");
      var t = document.createTextNode(element.data().content);
      li.appendChild(t);
      document.getElementById("myUL").appendChild(li);

      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    });

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector("ul");
    list.addEventListener(
      "click",
      function(ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
        }
      },
      false
    );
  })
  .catch();
