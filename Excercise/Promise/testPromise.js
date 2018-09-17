// function doAsync(val, callback) {
//     let error = null;
//     if(val === 0) {
//         error = new Error('Error message!');
//     }
//     setTimeout(() => callback(error, val), 50);
// }

// function printValue(err, result) {
//     if(err) {
//         //console.error(err.message);
//     } else {
//         //console.log(result);
//     }
// }

// doAsync(1, printValue); // 1
// doAsync(0, printValue); //Error message!

// *
//  Write helper function to promisify(lift) the function "doAsync", so that it can be used as a promise like the example shown. Do not utilize any 3rd party library.
 
// function promisify(fn) {
//     //Write your code here and do not use any 3rd party library.
//     return function (...args) {
//         return new Promise(function (resovle,reject) {
//             fn.apply(null,[...args,function(err,res){
//                 return err? reject(err) : resovle(res);
//             }] );
//         });
      
//     };
// }


// const promiseAware = promisify(doAsync);
// promiseAware(1).then(console.log); // 1
// promiseAware(0).catch(reason => console.error(reason.message)); //Error message!

const delay = (time = 50) => {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
  });
};
const proms1 = Promise.resolve(delay()).then(() => 1);
const proms2 = Promise.resolve(2);
const val3 = 3;

const array = [proms1, proms2, val3];
function promiseEach(promises = []) {
  //Write your code here, do not utilize any 3rd library
  let orderPromise = Promise.resolve();
  promises.forEach(pr => {
    orderPromise = orderPromise.then(() => Promise.resolve(pr)).then(console.log);
  });
}

promiseEach(array);