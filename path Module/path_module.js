const { log } = require("console");
const path = require("path");

// console.log(__dirname);
// console.log(__filename);

//! Join keywords with os specific seperator in path \ in windows and / in linux
const filePath = path.join(__dirname, __filename);
console.log(filePath);

//! Give absolute path
const resolve = path.resolve(filePath);

//! Extension of file
const extname = path.extname(filePath);

//! path withot filename
const base = path.basename(filePath);

//! Give dirname
const dir = path.dirname(filePath);

//! return parse object
const parse = path.parse(filePath);
// const norm = path.normalize(filePath);
// const deli = path.delimiter;

//! return true if given path is absolute
const abs = path.isAbsolute(filePath);
console.log(resolve);
console.log(extname);
console.log(base);
console.log(dir);
console.log(parse);
// console.log(norm);
// console.log(deli);
console.log(abs);
console.log({ resolve, extname, base, dir, parse, abs }); //! due to jason.stringify there will be two \ in path
