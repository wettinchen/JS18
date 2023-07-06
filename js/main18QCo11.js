class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.pizzaCrust = "thin";
myPizza.bake();
console.log(myPizza.pizzaCrust);