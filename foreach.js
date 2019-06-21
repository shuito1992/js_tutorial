let a = ["ant", "cat", "bat", 42];
a.forEach(function(element) {
  console.log(element);
});

a.forEach((elem) => { console.log(elem); });

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(char => { console.log(char); });