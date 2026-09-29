let penguin = 0;
let clickPower = 1;
let soundEnabled = false;

const counter =
  document.getElementById("counter");
const button =
  document.getElementById("penguinBtn");
const penguinSound = new Audio("penguin.mp3");

button.addEventListener("click",
  function() {
    penguin = penguin + clickPower;
    counter.textContent =
      "Penguins: " + penguin;

    if (soundEnabled) {
      penguinSound.currentTime = 0;
      penguinSound.play();
    }
  }
);

const multiplierBtn = 
  document.getElementById("multiplierBtn")

multiplierBtn.addEventListener(
  "click", function() {
    if (penguin >= 50) {
      penguin = penguin - 50;
      clickPower = clickPower + 1;
      counter.textContent =
        "Penguins: " + penguin;
    }
  }
);

const megaBtn = 
  document.getElementById("megaBtn")

megaBtn.addEventListener(
  "click", function() {
    if (penguin >= 600) {
      penguin = penguin - 600;
      clickPower = clickPower + 10;
      counter.textContent =
        "Penguins: " + penguin;
    }
  }
);

const soundBtn =
  document.getElementById("soundBtn");

soundBtn.addEventListener(
  "click", function() {
    if (penguin >= 5) {
      penguin = penguin - 5;
      counter.textContent =
        "Penguins: " + penguin;
      soundEnabled = true;
      soundBtn.disabled = true;
      soundBtn.textContent = "Penguin Sound Unlocked";
    }
  }
);

