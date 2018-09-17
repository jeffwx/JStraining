const p3 = new Promise((resolve, reject) => {
    resolve(x + 2);
});

p3.catch(() => console.log('2')).then(() => console.log('3'));