// Definition of characters
var guy = document.getElementById("guy");
var container = document.getElementById("container");
var guy2 = document.getElementById("guy2");

// Character position
var guyLeft = 0;
var guyDown = 0;
var guy2Left = 0;
var guy2Down = 0;

// Animate function to move character based off of input in keyboard
function animate(e) {
  var keyCode = window.event ? e.which : e.keyCode;

  //Guy 1
  if (keyCode == 39) {
    guyLeft += 50;
    guy.style.left = guyLeft + "px";
  }
  if (keyCode == 37) {
    guyLeft -= 50;
    guy.style.left = guyLeft + "px";
  }
  if (keyCode == 40) {
    guyDown += 50;
    guy.style.top = guyDown + "px";
  }
  if (keyCode == 38) {
    guyDown -= 50;
    guy.style.top = guyDown + "px";
  }

  //Guy 2
  if (keyCode == 68) {
    guy2Left += 50;
    guy2.style.left = guy2Left + "px";
  }
  if (keyCode == 65) {
    guy2Left -= 50;
    guy2.style.left = guy2Left + "px";
  }
  if (keyCode == 83) {
    guy2Down += 50;
    guy2.style.top = guy2Down + "px";
  }
  if (keyCode == 87) {
    guy2Down -= 50;
    guy2.style.top = guy2Down + "px";
  }
}

document.onkeydown = animate;
