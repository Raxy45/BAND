for (var i = 0; i < 7; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (event) {
      console.log(this);
      playSound(event.srcElement.classList[0]);
      addAnimation(event.srcElement.classList[0]);
    });
}
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});
function addAnimation(buttonClass) {
  document.querySelector("." + buttonClass).classList.add("pressed");
  setTimeout(removeAnimation, 100);
  function removeAnimation() {
    document.querySelector("." + buttonClass).classList.remove("pressed");
  }
}

function playSound(buttonClass) {
  if (buttonClass === "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (buttonClass === "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (buttonClass === "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (buttonClass === "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (buttonClass === "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (buttonClass === "k") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (buttonClass === "l") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}
