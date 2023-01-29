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

button.addEventListener('click', updateProgress);


// puts line through clicked items