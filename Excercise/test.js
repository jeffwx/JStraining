// // //#29
// // //Given the code below
// // //Given the code below
// // var obj = {
// //     count: 0,
// //     cool: function coolFn() {
// //         if (this.count < 1) {
// //             setTimeout( () => {
// //                 this.count++;
// //                 console.log('timeout!');
// //             }, 100 );
// //         }
// //     }
// // };

// // //What would be printed out to the console for obj.count?
// // // obj.cool();
// // // setTimeout( () => { console.log(obj.count); }, 200);  //your answer


// // //What if call the cool function like below, what would be printed out to the console?
// // var coolFunc = obj.cool;
// // coolFunc();
// // setTimeout( () => { console.log(obj.count); }, 200); 


// var id = 10;

// function foo() {
// 	return () => {
// 		return () =>{
// 			return () =>{
// 				console.log('id',this.id);
// 			}
// 		}
// 	}
// 	// body...
// }


// //var f = foo.call({id:1});
// var f = foo();

// var t1 = f.call({id:2})()();
// var t2 = f().call({id:2})();
// var t3 = f()().call({id:4});


// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log('id:', this.id);
//       };
//     };
//   };
// }

// var f = foo.call({id: 1});

// var t1 = f.call({id: 2})()(); // id: 1
// var t2 = f().call({id: 3})(); // id: 1
// var t3 = f()().call({id: 4});

// if(!('mybind' in Function.prototype)){
// 	Function.prototype.mybind = function () {
// 		// body...
// 		var fn = this;
// 		var context = arguments[0];
// 		var args = Array.from(arguments).slice(1);

// 		return function(...rest) {
// 			return fn.apply(context,[...args,...rest]);
// 		}
// 	};
// }


// function add(a,b){
// 	return a+b;
// }

// var addBound = add.mybind({},3);

// console.log(addBound(3));


// Promise.reject(new Error('fail')).then(function() {
//   // not called
// }, function(error) {
//   console.log(error); // Stacktrace
// });

// var p1 = new Promise(function(resolve, reject) {
//   resolve('Success');
// });

// p1.then(function(value) {
//   console.log(value); // "成功!"
//   throw 'oh, no!';
// }).catch(function(e) {
//   console.log(e); // "oh, no!"
// }).then(function(){
//   console.log('after a catch the chain is restored');
//   reject();
// }, function () {
//   console.log('Not fired due to the catch');
// }).then(()=> {
// 	console.log('chain continue?');
// }, () => {
// 	console.log('chain continue? failed');
// });


// var promise = new Promise(function(resolve, reject) {reject(new Error("ddd"))});

// promise.then(function(result) {
//     //操作
// }).catch(function(error) {console.error(error);});

var p1 = new Promise( (resolve, reject) => {
    setTimeout(() => reject('p1'), 10);
});

p1.then( ret => {
    console.log(ret);
    return 'then1';
},rej => {
    throw new Error('test0');
}).then( ret => {
    console.log("resolve 2"+ ret);
    throw new Error('test1');
},rej => {
    console.log("reject is here 2" + rej);
    throw new Error("test2");
    return "fff"
    
}).then( ret => {
    console.log("resolve 3"+ ret);
    return "ddd"
}, rej => {
    console.log("reject is here 3" + rej);
    
    return "fff"
    throw new Error("test");
}).catch(error => {
    console.log("Error is " + error);
    return 'abc';
}).then(ret => {
    console.log("After catch then "+ ret);
    //throw new Error('FFF');
},rej => {
    consle.log("after catch reject " + rej);
});