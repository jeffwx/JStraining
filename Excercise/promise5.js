setTimeout(() => console.log('1'), 0);
const p1 = new Promise((resolve, reject) => {
    resolve();
    console.log(v+'+2');
   
});

p1.then(() => console.log('3'),()=> console.log('falied')).then(() => console.log('4'));
p1.then(() => setTimeout(() => console.log('5'), 0),()=> console.log('falied2')).then(() => console.log('6'));
console.log('7');