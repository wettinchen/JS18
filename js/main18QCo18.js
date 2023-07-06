class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}