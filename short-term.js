class ShortList {
    constructor() {
        self.list = new Array();
    }
    addItem(shortitem, shortcost) {
        self.list.push({item: shortitem, cost: shortcost})
    }
}