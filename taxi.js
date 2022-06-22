class Taxi {
    constructor(name) {
        this.name = name
        this.totaldistance = 0;
        this.price = 1;
        this.profit = 0;
    }
    formatCurrency(num) {
        return `$` + num.toFixed(2) + `Eur`
    }
    intro() {
        return `Sveiki, as ${this.name} ir kilometro kaina su manimi yra ${this.formatCurrency(this.price)}.`;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        return `${this.name} nustate nauja kilometro kaina - ${this.formatCurrency(this.price)}.`;
    }

    ride(distance) {
        this.totaldistance += distance
        this.profit += distance  * this.price
    }

    stats() {
        return `${this.name} nuvaziavo ${this.totaldistance} km ir uzdirbo ${this.formatCurrency(this.profit)}.`;
    }
}

module.exports = Taxi;