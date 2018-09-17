// const thenable = {
//     then() {
//         return 'thenable';
//     }
// };
// Promise.resolve(thenable).then(value => console.log('hello' + value));


// const thenable = {
//     then(fn) {
//         fn('thenable');
//     }
// };
// Promise.resolve(thenable).then(value => console.log('hello' + value));

const thenable = {
    then(resolve) {
        resolve('thenable');
    }
};
Promise.resolve(thenable).then(function (value) {
	return console.log('hello' + value);
});