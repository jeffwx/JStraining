// function pipeline(...func){
// 	return function(...args){
// 		return [...func].reduce(function(pre,current){
// 			return current.apply(null,[pre.apply(null,[...args])]);
// 		});
// 	}
// }

// const plus1 = a => a+1;
// const mult2 = a => a*2;
// const min3 = a => a -10;

// const pipelinedFun = pipeline(plus1,mult2,min3);

// console.log(pipelinedFun(10));

// function P() {
	
// }

// var p = new P();

// console.log(p.constructor === P); 
// console.log(p.constructor.prototype === Object.getPrototypeOf(p)); 


function F(){
    
}

var f = new F();
console.log(Object.getPrototypeOf(f));
console.log(Object.getPrototypeOf(F));
console.log(F.prototype);