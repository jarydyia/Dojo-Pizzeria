function pizzaOven (crust,sauce,cheeses,toppings){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "white", ["mozzarella"], ["cats", "dogs", "onions"])
var pizza4 = pizzaOven("hand tossed", "none", ["mozzarella"], ["pickles", "peppers", "onions"])


console.log(pizza1)

