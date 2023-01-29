
let longGoals = {
    item: [],
    cost: []
}

page = 0;

function buttonClick() {
    longitem = document.getElementById("sterm").value;
    longcost = document.getElementById("samount").value;

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
let page = 0;
next.addEventListener('click', ()=>{
    if (page == 0) {
        page++;
        document.getElementById("change").innerHTML =                
        "A long-term need might be saving money for a house. When you grow old, you will need money to buy a house for you" +
        "and your family, so it's important to start saving for it now."+
        "To obtain long-term wants and needs, you may have to sacrifice or lessen your short-term wants. Short-term wants will " +
        "slow down the process of achieving long-term wants and needs."
    }
    else {
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