export function makePizza(size, ...toppings) {
    console.log(`\nMaking a ${size}-inch pizza with the following toppings:`);

    for (let topping of toppings) {
        console.log(topping);
    };
};


export function greet(name) {
    console.log(`\nHello ${name}, it's nice to meet you`)
};


export function professLove(lover, loved, ...message) {
    console.log(`\nHi ${loved}, am ${lover} and I love you ${message}.`)
};