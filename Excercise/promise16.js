//#16
//Create a helper functin in Promise object - Promise.first, which accepts an array of promises or combination of promises and primitive value. It works this way: the promise returned from Promise.first can be resolved when the first promise of given promises is resolved. If all given promises are rejected, then the main promise is rejected.
// if(!Promise.first) {
//     Promise.first = function(prs) {
// 		function loop(){
// 			//console.log(e)
// 	    	if(prs.length === 0) throw Promise.reject("None good");
// 	    	return prs.shift().catch(loop);
// 	    }
//        return Promise.resolve().then(loop);
//     }
// }

if(!Promise.first) {
    Promise.first = function(prs) {
        return new Promise(function(resolve,reject){
           let i = 0;
           prs.forEach(function(pr){
                Promise.resolve(pr).then(resolve).catch(function (error) {
                  i++;
                  if (i === prs.length){
                    throw Promise.reject(new Error("None good"));
                  }
                }
              );
            });
        }
      );
    };
}


//E.g. it can be used this way:
//Promise.first([promise1, 1, promise2]);
var promise1 = new Promise((resolve, reject) => { 
  resolve('resolve1!!!');
  //return Promise.reject('reject!!!').then(error => console.log(error),error => console.log(error)); 
});

var promise2 = new Promise((resolve, reject) => { 
  //setTimeout(resolve, 1000, 'two');
   reject('resolve2!!!');
});


var promise3 = new Promise((resolve, reject) => {
  reject('reject3!!!'); 
});

var pro = Promise.first([promise1,promise2,promise3]).then(val => console.log(val)).catch(val => console.log(val));

//console.log(pro);