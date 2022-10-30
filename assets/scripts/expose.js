// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  
  var volume = document.getElementById('volume');
  volume.addEventListener('change', sliderChange);
  var hornElement = document.getElementById('horn-select');
  hornElement.addEventListener('change', hornChange);

  var button = document.querySelector("button");
  button.addEventListener('click', buttonPress);
}

function hornChange() {
  var img = document.querySelector("img");
  const audio = document.querySelector('audio');

  var selected = document.getElementById('horn-select');
  audio.src = "assets/audio/" + selected.value + ".mp3";
  img.src = "assets/images/" + selected.value + ".svg";
};

function sliderChange() {
  var img = document.getElementById("volume-controls").children[1]
  const audio = document.querySelector('audio');
  if (volume.value == 0) {
      img.src = "assets/icons/volume-level-0.svg";
  }
  else if (volume.value >= 1 && volume.value < 33) {
    img.src = "assets/icons/volume-level-1.svg";
  }
  else if (volume.value >= 33 && volume.value < 67) {
    img.src = "assets/icons/volume-level-2.svg";
  }
  else {
    img.src = "assets/icons/volume-level-3.svg";
  }
  
  audio.volume = volume.value / 100;
};

function buttonPress() {
  var audio = document.querySelector('audio');
  var selected = document.getElementById('horn-select');

  audio.play();

  if (selected.value == "party-horn") {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti();
  }
}