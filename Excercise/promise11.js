const prms = Promise.resolve(10);

prms.then(val => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(val * 2), 10);
      //return Promise.resolve((function (val) { return val * 2; })());
  });
}).then(val => console.log(val));
