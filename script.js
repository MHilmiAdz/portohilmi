document.addEventListener("DOMContentLoaded", function() {
    var colorChangeButton = document.getElementById("colorChangeButton");
  
    colorChangeButton.addEventListener("click", function() {
      var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    });
  });