function main() {
    longList = new LongList();
}


function buttonClick() {
    longitem = document.getElementById("sterm").value;
    longcost = document.getElementById("samount").value;
    longList.addItem(longitem, longcost);
    table = document.getElementById("tableID");

    let elementRow = document.createElement("tr");

    let itemElement = document.createElement("td");
    let costElement = document.createElement("td");

    itemElement.innerHTML = longitem;
    costElement.innerHTML = longcost;

    elementRow.append(itemElement);
    elementRow.append(costElement);

    table.append(elementRow)
}

function update() {
    parent.postMessage({"type":"long-term","list":longList.list});
}

class LongList {
    constructor() {
        self.list = new Array();
    }
    addItem(longitem, longcost) {
        self.list.push({item: longitem, cost: longcost});
    }
}