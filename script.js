let penguin = 0;
let clickPower = 1; 


const counter =
  document.getElementById("counter");
const button =
  document.getElementById("penguinBtn");

button.addEventListener("click",
  function() {
    penguin = penguin + clickPower;
    counter.textContent =
      "Penguins: " + penguin;
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

