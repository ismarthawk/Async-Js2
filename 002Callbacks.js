const howAreYou = (name) => {
  console.log(`Call Back function to ask how are you ${name}?`);
};

setTimeout(
  (callback, name) => {
    callback(name);
  },
  2000,
  howAreYou,
  "Damoadar"
);

// 2 types of callbacks 1. synchronous, asynchronous callbacks
