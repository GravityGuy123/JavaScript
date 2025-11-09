// Using Set Timeout
setTimeout(() => {}, timeout);
setTimeout(function () {}, timeout);

setTimeout(function () {
  console.log("Goodbye");
}, 1000);

setTimeout(() => {
  console.log("Goodbye");
}, 1000);

// SetTimeout
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000);

setInterval(() => {
  console.log("This message is shown every 3 seconds");
}, 3000);

console.log("This message is shown immediately");