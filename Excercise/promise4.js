const promise = new Promise((resolve, reject) => {
    console.log('New Promise');
    resolve();
});

promise.then(() => console.log('Resolved')).then(() => console.log('Resolved-1'));
promise.then(() => console.log('Resolved-2'));
console.log('Hello');