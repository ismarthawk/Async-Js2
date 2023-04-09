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
};

const failCallBack = (data) => {
  console.log(`He ${data}, smash the table.`);
};

succPromise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

failPromise.then(succCallBack).catch(failCallBack);
