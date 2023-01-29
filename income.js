inputId = document.getElementById('inc');
const income = document.querySelector('p');
const next = document.getElementById('next');
const weekinc = document.querySelector('.weekinc');

  

next.addEventListener('click', ()=>{
    if(next.innerText === "Submit Income"){
        // alert("Youre poor LMAO");
       update();
    }
    
  income.style.display = "none";
  weekinc.style.display = "flex";
  next.innerText = "Submit Income";
})

function update() {
    window.top.postMessage({"type":"income"},"*");
}