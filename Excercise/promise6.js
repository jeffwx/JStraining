const p2 = new Promise((resolve, reject) => {
    console.log('1');
    reject();
    resolve();
});

p2.then(() => console.log('2'), () => console.log('3')).catch(() => console.log('4')).then(() => console.log('5'));