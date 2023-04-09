// this is a solution to callback hell
const succPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Got Laddus");
  }, 2000);
});

const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Got Nothing");
  }, 2000);
});

const succCallBack = (data) => {
  console.log(`He ${data}, decorate the table`);
  return failPromise;
};

const failCallBack = (data) => {
  console.log(`He ${data}, smash the table.`);
};

succPromise.then(succCallBack).then(succCallBack).catch(failCallBack);
