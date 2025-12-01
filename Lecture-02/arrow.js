const a = 5
const b = 10

// 1. Traditional Function Expression
const add = function(x, y) {
    return x + y
}

console.log(`The sum of ${a} and ${b} is ${add(a, b)}`)

// 2. ES6 Arrow Function (Concise Body)
const xadd = (x, y) => x + y

console.log(`The sum of ${a} and ${b} is ${xadd(a, b)}`)

// 3. ES6 Arrow Function (Block Body)
const subtract = (x, y) => {
    return x - y
}

console.log(`The difference of ${b} and ${a} is ${subtract(b, a)}`)