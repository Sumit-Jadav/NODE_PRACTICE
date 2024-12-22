//! Property export
const { sum, min } = require("./math");

//! using math
const math = require("./math");

// const min = require("./math");

//! globalThis keyword refers to the global object in each javascript engine
// console.log(globalThis);

//! Using object export and property export

// const tot = sum(5, 10);
// console.log(tot);
// const sub = min(5, 10);
// console.log(sub);

//! Using math

const tot = math.sum(5, 10);
console.log(tot);
const sub = math.min(5, 10);
console.log(sub);
