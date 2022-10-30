// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const button = document.querySelector("button");
const select = document.querySelector("select");
var voices = [];
button.addEventListener('click', talk);

function init() {
  setTimeout(() => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      var opt = document.createElement('option');
      opt.value = voices[i];
      opt.setAttribute('data-name', voices[i].name);
      opt.textContent = `${voices[i].name}`;
      select.appendChild(opt);
      }
    }, 10);

    let img = document.querySelector("img");
    setInterval(function() {
      if (!synth.speaking) {
        img.src = "assets/images/smiling.png";
      }
    }, 500);
}

function talk() {
  let text = document.getElementById("text-to-speak");
  let utterance = new SpeechSynthesisUtterance(text.value);

  const selectedOption = select.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  let img = document.querySelector("img");
  img.src = "assets/images/smiling-open.png";
  synth.speak(utterance);
}