
let shortGoals = {
    item: [],
    cost: []
}

page = 0


function buttonClick() {
    shortitem = document.getElementById("sterm").value;
    shortcost = document.getElementById("samount").value;   
    table = document.getElementById("tableID");

    shortGoals.item.push(shortitem);
    shortGoals.cost.push(shortcost);
    console.log("ShortList: " + shortGoals.list);

    let elementRow = document.createElement("tr");

    let itemElement = document.createElement("td");
    let costElement = document.createElement("td");

    itemElement.innerHTML = shortitem;
    costElement.innerHTML = "$" + shortcost;

    elementRow.append(itemElement);
    elementRow.append(costElement);

    table.append(elementRow)
}

function update() {
    parent.postMessage({"type":"short-term", "data":shortGoals},"*");
}


let invis = document.getElementsByClassName('invis');
const next = document.getElementById('hmmm');
const bruh = document.getElementById('invis');
const text = document.querySelector('.less');
const down = document.querySelector('.down');
const up = document.querySelector('.up');
down.style.height = "20vh";
up.style.height = "80vh";
next.addEventListener('click', ()=>{
    if (page == 0) {
        page++;
        document.getElementById("change").innerHTML =
        "Short - Term Wants and Needs are things that people want or need right now or in the near future. <br>"
        +"For example, if you are hungry right now, food is a short-term need. You need to eat something soon in order to be healthy."
        +"A short-term want might be getting a new toy or game you've been wanting. You might really want it, but you don't need it to survive, "
        +"even if your best friends have it right when it comes out!"
    }else {
        Array.from(invis).forEach(element => {
            element.classList.remove('invis');
        });
        bruh.removeAttribute('id');
        next.style.display = "none";
        text.style.display = "none";
        down.style.height = "35vh";
        up.style.height = "65vh";
    }
})