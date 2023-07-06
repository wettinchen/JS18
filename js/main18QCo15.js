class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {

    }
}