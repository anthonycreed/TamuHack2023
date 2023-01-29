function main() {
    shortList = new ShortList();
}


function buttonClick() {
    shortitem = document.getElementById("sterm").value;
    shortcost = "$" + document.getElementById("samount").value;
    shortList.addItem(shortitem, shortcost);
    table = document.getElementById("tableID");

    let elementRow = document.createElement("tr");

    let itemElement = document.createElement("td");
    let costElement = document.createElement("td");

    itemElement.innerHTML = shortitem;
    costElement.innerHTML = shortcost;

    elementRow.append(itemElement);
    elementRow.append(costElement);

    table.append(elementRow)
}

function update() {
    parent.postMessage({"type":"short-term","list":shortList.list},"*");
}

class ShortList {
    constructor() {
        self.list = new Array();
    }
    addItem(shortitem, shortcost) {
        self.list.push({item: shortitem, cost: shortcost});
    }
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