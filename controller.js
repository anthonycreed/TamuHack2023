let gifName = "popcat.gif";

childWindow = document.getElementById("UI_box")
const iframe = document.querySelector("iframe");
window.addEventListener('message', message => {
  console.log("MADE IT");

    if (message.data["type"] == "income") {
        iframe.src = "short-term.html";
        updateProgress();
    }
    if (message.data["type"] == "short-term") {
      iframe.src = "long-term.html";
      updateProgress();
    }
    if (message.data["type"] == "long-term") {
      iframe.src = "calculator.html";
      updateProgress();
    }
    console.log(message.data["type"])
});

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
}, 3000);
