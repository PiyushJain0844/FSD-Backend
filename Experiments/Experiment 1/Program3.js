// Program 3 : Visualize the event loop using setTimeout, setImmediate, and process.nextTick

console.log("Start");

process.nextTick(() => {
    console.log("process.nextTick executed");
});

setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

setImmediate(() => {
    console.log("setImmediate executed");
});

console.log("End");