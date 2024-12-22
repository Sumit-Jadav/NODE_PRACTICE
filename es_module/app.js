//todo  to use import write "type":"module" in your package.jason file

import addition from "./math.js"; //? we can use any name for imported function

import { min } from "./math.js"; //? Named export :- use name as exported name because there can be more than one export

import { mul, div } from "./math.js";
//!====================OR====================
import * as math from "./math.js";

console.log(addition(1, 20)); //? default export
console.log(min(20, 10)); //? named export
console.log(math.div(10, 2)); //? aggregate export
console.log(mul(10, 2)); //? aggregate export
