childWindow = document.getElementById("UI_box")

window.addEventListener('message', message => {
    document.getElementById('test').innerHTML = message.data["poke"];
});
// const childWindow = document.getElementById('frame').contentWindow;
// window.addEventListener('message', message => {
//     if (message.source !== childWindow) {
//         return; 
//     }
//     document.getElementById('test').innerHTML = "pizza pie";
// });
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