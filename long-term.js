
let longGoals = {
    item: [],
    cost: []
}

function buttonClick() {
    longitem = document.getElementById("sterm").value;
    longcost = document.getElementById("samount").value;
    longList.addItem(longitem, longcost);
    table = document.getElementById("tableID");

    longGoals.item.push(longitem);
    longGoals.cost.push(longcost);

    let elementRow = document.createElement("tr");

    let itemElement = document.createElement("td");
    let costElement = document.createElement("td");

    itemElement.innerHTML = longitem;
    costElement.innerHTML = "$" + longcost;

    elementRow.append(itemElement);
    elementRow.append(costElement);

    table.append(elementRow)
}

function update() {
    parent.postMessage({"type":"long-term", "data":longGoals},"*");
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
    Array.from(invis).forEach(element => {
        element.classList.remove('invis');
    });
    bruh.removeAttribute('id');
    next.style.display = "none";
    text.style.display = "none";
    down.style.height = "35vh";
    up.style.height = "65vh";
})