const resolveHello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
};

const resolveWorld = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
};

resolveHello().then((data) => {
  console.log(data);
});

resolveWorld().then((data) => {
  console.log(data);
});
