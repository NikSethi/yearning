var button1 = document.getElementById("button1");
var div1 = document.getElementById("1");

button1.addEventListener("click", function() {
      div1.classList.toggle("show");
      if (div1.classList.contains("show")) {
        button1.innerHTML = "and before";
      } else {
        button1.innerHTML = "and then";
      }
    });

var button2 = document.getElementById("button2");
var div2 = document.getElementById("2");

button2.addEventListener("click", function() {
      div2.classList.toggle("show");
      if (div2.classList.contains("show")) {
        button2.innerHTML = "and before";
      } else {
        button2.innerHTML = "and then";
      }
    });

var button3 = document.getElementById("button3");
var div3 = document.getElementById("3");

button3.addEventListener("click", function() {
      div3.classList.toggle("show");
      if (div3.classList.contains("show")) {
        button3.innerHTML = "and before";
      } else {
        button3.innerHTML = "and then";
      }
    });