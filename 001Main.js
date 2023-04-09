function greet(name) {
  console.log(`Hello @${name}`);
}

setTimeout(greet, 2000, "Damodar");

// setInterval(greet, 2000, "Damodar");

setTimeout(
  (name) => {
    console.log(`This is the function in timeout ${name}`);
  },
  2000,
  "damodar"
);
