

var SAVE_KEY = "Counter";
window.onload = function () {
  var txt = document.getElementById("txt");
  var msg = document.getElementById("msg");
  txt.onkeydown = count;
  txt.onchange = count;
  if (localStorage[SAVE_KEY]) {
    txt.value = localStorage[SAVE_KEY];
    count();
  }
};
function count() {
  msg.innerHTML = txt.value.length + "字";
  localStorage[SAVE_KEY] = txt.value;
  var star = document.getElementById("star");
  star.innerHTML += "<img src= 'star2.png'>";
}

window.addEventListener("scroll", function(event) {
    var y = Math.round(window.scrollY % 360);
    document.body.style.backgroundColor = "hsla( " + y + ", 33%, 25%, 0.75)";
  });

