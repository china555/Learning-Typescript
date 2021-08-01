interface IPizza {
  name: string;
  toppings: string[];
}

const pizzas: IPizza[] = [{ name: "Peperoni", toppings: ["peperoni"] }];

const mappedPizza = pizzas.map((pizza) => pizza.name.toUpperCase());
