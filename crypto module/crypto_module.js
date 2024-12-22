const crypto = require("crypto");

console.log(crypto.randomBytes(5).toString("hex"));

const createhash = crypto.createHash("sha256");
console.log(createhash.update("sumit").digest("hex"));
//! update() for give string which is need to hash and digest to access hash in redable form

const hash = crypto.createHash("sha256").update("sumit").digest("hex");

//! crypto will always create same hash for same string
console.log(hash);
