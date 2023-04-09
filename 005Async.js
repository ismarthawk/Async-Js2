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

const resolveHelloWorld = async () => {
  const hello = await resolveHello();
  const world = await resolveWorld();

  console.log(hello + world);
};

resolveHelloWorld();
