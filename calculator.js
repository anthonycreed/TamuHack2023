let short;
let long;

window.addEventListener("message", function(event) {
    if (event.data.type === "short-term") {
        console.log("in Short");
      short = event.data.data;
    }
    if(event.data.type === "long-term"){
        long = event.data.data;
        
    }if(event.data.type === "income"){
        let money = event.data.data;
        calculateTimings(parseInt(money));
        updateShort(short);
        updateLong(long);
    }
  });

const shortTerm = document.querySelector(".shortterm");
const longTerm = document.querySelector(".longterm");
let shortTime = [];
let longTime = [];

function updateShort(goals){
 let length = goals.item.length;
 for(let i = 0; i < length; i++){
    let item = document.createElement("p");
    item.innerText = goals.item[i];
    item.classList.add("item");

    let time = document.createElement("p");
    time.innerText = shortTime[i] + " weeks";
    time.classList.add("time");

    shortTerm.appendChild(item);
    shortTerm.appendChild(time);
 }
}

function updateLong(goals){
    let length = goals.item.length;
    for(let i = 0; i < length; i++){
       let item = document.createElement("p");
       item.innerText = goals.item[i];
       item.classList.add("item");

       let time = document.createElement("p");
       time.innerText = longTime[i] + " weeks";
       time.classList.add("time");

       longTerm.appendChild(item);
       longTerm.appendChild(time);
    }
   }


   function calculateTimings(money){
    //short term gets handled first
    let income = parseInt(money);
    let numWeeks = 0;

    for(let i = 0; i < short.item.length; i++){
        let amtLeft = parseInt(short.cost[i]);
        let extra = 0;

        while(amtLeft > 0){
            amtLeft-= extra;
            if(extra === 0)
                amtLeft -= income;
            extra = 0;
            numWeeks++;
            if(amtLeft < 0){
                extra = amtLeft * -1;
            }
        }
        shortTime.push(numWeeks);
    }
    for(let i = 0; i < long.item.length; i++){
        let amtLeft = parseInt(long.cost[i]);
        let extra = 0;
        while(amtLeft > 0){

            amtLeft-= extra;
            if(extra === 0)
                amtLeft -= income;
            extra = 0;
            numWeeks++;
            if(amtLeft < 0){
                extra = amtLeft * -1;
            }
        }
        longTime.push(numWeeks);
    }
   }