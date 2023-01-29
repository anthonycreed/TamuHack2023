let gifName = "popcat.gif";

childWindow = document.getElementById("UI_box")

window.addEventListener('message', message => {
    document.getElementById('test').innerHTML = message.data["poke"];
});

const progressBar = document.getElementById('progressed');
console.log(progressBar);
const button = document.getElementById("increase");
let currWidth = 0;
function updateProgress(){
    currWidth += 10;
    if(currWidth > 100){
        currWidth = 0;
    }
   progressBar.style.width = currWidth + "%";
}

progressBar.innerText = "70%";

button.addEventListener('click', updateProgress);

//gifchanger
function changeScr() {
    document.getElementById("gifid").src=gifName;
  }
