let orders = []

const restaurant = {
    orders: [],
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    getAllOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken Sandwich",
    fries: true,
    drinkSize: "L" 
}

const bigMacComboMeal = {
    sandwichType: "Big Mac",
    fries: true,
    drinkSize: "L"
}

const lettuceWrap = {
    sandwichType: "lettuce wrap",
    fries: false,
    drinkSize: null
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(bigMacComboMeal)
restaurant.placeOrder(lettuceWrap)
// Invoke the function to return the list of all orders
const allOrders = restaurant.getAllOrders()
// Output all orders to the console using console.table()
console.table(allOrders)