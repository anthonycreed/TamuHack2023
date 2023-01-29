inputId = document.getElementById('inc');
const income = document.querySelector('p');
const next = document.getElementById('next');
const weekinc = document.querySelector('.weekinc');

let money = 0;

next.addEventListener('click', ()=>{
    if(next.innerText === "Submit Income"){
        money = inputId.value;
       update();
    }
    
  income.style.display = "none";
  weekinc.style.display = "flex";
  next.innerText = "Submit Income";
})

function update() {
    parent.postMessage({"type":"income", "data":money},"*");
}