let gifName = "media\popcat.gif";
const eggBoi = document.getElementById('gifid');
const julie = document.querySelector('.Julie');
const julie_sub = document.querySelector('.Julie-sub');
childWindow = document.getElementById("UI_box")
window.addEventListener('message', message => {
    if (message.data["type"] == "income") {
        childWindow.src = "calculator.html";
        updateProgress();
        console.log("Changing source")
        eggBoi.src = getRandomHatch();
        julie.innerText = generateRandomName();
        julie_sub.style.visibility = "visible";

    }
    if (message.data["type"] == "short-term") {
        childWindow.src = "long-term.html";
        updateProgress();
    }
    if (message.data["type"] == "long-term") {
        childWindow.src = "income.html";
        updateProgress();
    }
    console.log(message.data["type"])
});

var firstNames = ["Takashi", "Naoko", "Akiko", "Haruka", "Yui", "Akihito", "Ryo", "Kazuo", "Satoshi", "Miyuki"];
var lastNames = ["Tanaka", "Suzuki", "Sato", "Kobayashi", "Nakamura", "Yamamoto", "Ikeda", "Matsumoto", "Kimura", "Watanabe"];

function generateRandomName() {
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return firstName + " " + lastName;
}

const progressBar = document.getElementById('progressed');
console.log(progressBar);
const button = document.getElementById("increase");
let currWidth = 0;
progressBar.style.width = currWidth;
progressBar.style.display = "none";
progressBar.innerText = currWidth + "%";
function updateProgress(){
    if(currWidth == 0){
        currWidth += 10;
    }
    progressBar.style.display = "flex";
    currWidth += 30;
    if(currWidth > 100){
        currWidth = 0;
        progressBar.style.display = "none";
    }
   progressBar.style.width = currWidth + "%";
   progressBar.innerText = currWidth + "%";
}




//button.addEventListener('click', updateProgress);

//gifchanger
function changeScr() {
    document.getElementById("gifid").src=gifName;
  }

  const carousel = document.getElementById("carousel");
const cards = carousel.querySelectorAll(".tip");
let currentCard = 0;

setInterval(() => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].style.display = "flex";
}, 6000);

let animals = ["media/snakeFinal.gif", "media/roboMonkeyFinal.gif", "media/finalPink.gif", "media/monkeyEggAngyFinal.gif"];

function getRandomHatch(){
  let hatch = animals[Math.floor(Math.random() * animals.length)];
  return hatch;
}