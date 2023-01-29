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
    parent.postMessage({"type":"short-term","list":shortList.list});
}

class ShortList {
    constructor() {
        self.list = new Array();
    }
    addItem(shortitem, shortcost) {
        self.list.push({item: shortitem, cost: shortcost});
    }
}
