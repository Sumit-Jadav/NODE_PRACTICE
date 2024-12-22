import { LocalStorage } from "node-localstorage";

const localstorage = new LocalStorage("localStorage");

localstorage.setItem("Counter", "1");

console.log(localstorage.getItem("Counter"));

let count = parseInt(localstorage.getItem("Counter"), 10);
count++;
console.log(count, typeof count);
localstorage.setItem("Counter", count);
console.log(localstorage.getItem("Counter"));
