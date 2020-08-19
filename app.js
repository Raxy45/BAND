for (var i = 0; i < 14; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (event) {
      console.log(event.srcElement.classList[0]);
      playSound(event.srcElement.classList[0]);
      addAnimation(event.srcElement.classList[0]);
    });
}
document.addEventListener("keydown", function (event) {
  var uppercase = event.key.toUpperCase();
  playSound(uppercase);
  addAnimation(uppercase);
});
function addAnimation(buttonClass) {
  document.querySelector("." + buttonClass).classList.add("pressed");
  setTimeout(removeAnimation, 100);
  function removeAnimation() {
    document.querySelector("." + buttonClass).classList.remove("pressed");
  }
}

function playSound(buttonClass) {
  if (buttonClass === "w" || buttonClass === "W") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (buttonClass === "a" || buttonClass === "A") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (buttonClass === "s" || buttonClass === "S") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (buttonClass === "d" || buttonClass === "D") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (buttonClass === "j" || buttonClass === "J") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (buttonClass === "k" || buttonClass === "K") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (buttonClass === "l" || buttonClass === "L") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}
