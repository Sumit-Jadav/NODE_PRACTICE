const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventcounter = {
  "log-in": 0,
  "user-purchase": 0,
  "user-profile-update": 0,
  "log-out": 0,
};

emitter.on("log-in", (userName) => {
  console.log(`${userName} logged in successful`);
  eventcounter["log-in"]++;
});
emitter.on("user-purchase", (args) => {
  console.log(`${args.userName} has purchased ${args.item}`);
  eventcounter["user-purchase"]++;
});
emitter.on("user-profile-update", (args) => {
  console.log(`${args.userName} your ${args.update} has updated`);
  eventcounter["user-profile-update"]++;
});
emitter.on("log-out", (userName) => {
  console.log(`${userName} logged out `);
  eventcounter["log-out"]++;
});
emitter.on("report", (args) => {
  console.log(args);
});

emitter.emit("log-in", "sumit");
emitter.emit(
  "user-purchase",
  { userName: "sumit", item: "Laptop" },
  eventcounter
);
emitter.emit(
  "user-profile-update",
  { userName: "Sumit", update: "emial" },
  eventcounter
);
emitter.emit("log-out", "Sumit", eventcounter);
emitter.emit("report", eventcounter);
