class Port {
    constructor(name){
        this.name = name;
        this.dockedShips = [];
    };

    addShip(ship){
        this.dockedShips.push(ship);
    };

    removeShip(ship){
        this.dockedShips.splice(this.dockedShips.indexOf(ship));
    }
}


module.exports = Port