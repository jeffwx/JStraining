//#12
/**
 Given an array which contains both promise instance and primitive value.
 Write a function called "promiseEach" to iterate the given array to print their value(resolved value for promise, the value itself for primitive value) to the console serially(which means the second item of array should be run/printed after the first one(promise) done).
 NOTE: do not use any 3rd part library.

 */
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
	Promise.all(promises).then(function fulfilled(vals) {
		vals.forEach(function (val) {
		console.log(val);
	})
})

}

promiseEach(array); // the console will print the number 1, 2 and 3 in order.