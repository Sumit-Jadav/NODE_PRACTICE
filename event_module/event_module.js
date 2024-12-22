//! Thoery
//* used for event driven applications and used for custum event handling
//* .on(nameOfEvent, callback for event definaton) is used for defining the event
//* .emmit(eventName , argumets...) is used for trigeering that event

//! Step 1 :- require events module and it will give EventEmitter class

const EventEmitter = require("events");

//! Step 2 :- Create instance of that class

const emitter = new EventEmitter();

//! Step 3 :- Define event functionality

// emitter.on("greeting", () => {
//   console.log("Hello Sumit");
// });

//! Step 4 :- Emmit the event (Trigger the event)

// emitter.emit("greeting");

//! Passing arguments

// emitter.on("greet", (userName) => {
//   console.log(`Hellow ${userName}`);
// });

// emitter.emit("greet", "sumit");

//! Passing more than one arguments

// emitter.on("greet", (userName, profession) => {
//   console.log(`Hellow ${userName} and you are a ${profession}`);
// });

// emitter.emit("greet", "sumit", "junior developer");

//! When there are more than one arguments than it us better to pass it inside the object

emitter.on("greet", (args) => {
  console.log(`Hellow ${args.userName} and you are a ${args.profession}`);
});

emitter.emit("greet", { userName: "sumit", profession: "Junior developer" });
