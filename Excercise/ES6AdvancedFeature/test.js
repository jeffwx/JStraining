// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// console.log(iter.next()); // { value: 'a', done: false }
// console.log(iter.next());// { value: 'b', done: false }
// console.log(iter.next());// { value: 'c', done: false }
// console.log(iter.next()); // { value: undefined, done: true }


// const str = 'Nokia';
// [...str] // ['N', 'o', 'k', 'i', 'a']

// //The output will be changed into
//     // ['Nokia', 'Shanghai', 'Bell']
// //Write your code below:
// str[Symbol.iterator] = function*() {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...str]);

// let obj = {
//     0: '1',
//     1: '2',
//     2: '3',
//     length: 3
// };

// //Write your code below:
// obj[Symbol.iterator] = Array.prototype[Symbol.iterator];

// for (let item of obj) {
//     console.log(item); // '1', '2', '3'
// }


// const str = 'Nokia';
// console.log([...str]); // ['N', 'o', 'k', 'i', 'a']

// str[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       if (this._first) {
//         this._first = false;
//         return { value: "bye", done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };

// function *foo() {
//     yield 2;
//     yield 3;
//     return "foo";
// }

// function *bar() {
//     yield 1;
//     var v = yield *foo();
//     console.log( "v: " + v );
//     yield 4;
// }

// var it = bar();

// console.log(it.next());
// // your answer：{value: 1, done: false}
// console.log(it.next());
// // your answer：{value: 2, done: false}
// console.log(it.next());
// // your answer：{value: 3, done:false}
// console.log(it.next());
// // your answer："v: foo"{value: 4, done: false}
// console.log(it.next());


// console.log([...str]); // ['Nokia', 'Shanghai', 'Bell']


// function* inner() {
//     yield 'shanghai bell';
// }

// function* outer1() {
//     yield 'nokia';
//     yield inner();
//     yield 'hangzhou';
// }

// var gen = outer1()
// console.log(gen.next().value) // your answer for the value: nokia
// console.log(gen.next().value) // your answer for the value: 返回一个遍历器对象
// console.log(gen.next().value)

// const str = {};
// //[...str] // ['N', 'o', 'k', 'i', 'a']

// //The output will be changed into
    
// //Write your code below:
// str[Symbol.iterator] = function* () {
//      yield 'Nokia';
//      yield 'Shanghai';
//      yield 'Bell';
// };

// console.log([...str]); // ['Nokia', 'Shanghai', 'Bell']


// const str = 'Nokia';
// [...str] // ['N', 'o', 'k', 'i', 'a']

// //The output will be changed into
//     // ['Nokia', 'Shanghai', 'Bell']
// //Write your code below:
// String.prototype[Symbol.iterator] =  function*() {
//   yield "Nokia";
//   yield "Shangehai";
//   yield "Bell";
// };

// console.log([...str]); 


// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// function log(target, name, descriptor) {
//   var oldValue = descriptor.value;

//   descriptor.value = function() {
//     console.log(`Calling "${name}" with`, arguments);
//     return oldValue.apply(null, arguments);
//   };

//   return descriptor;
// }

// const math = new Math();

// // passed parameters should get logged now
// math.add(2, 4);


//var str = new String("hi");

// [...str] // ["h", "i"]

// str[Symbol.iterator] = function() {
//   let i = 0;
//   return {
//     next: function() {
//         i++;
//         if(i===1){
//            return  { value: "nokia", done: false };
//         }else if(i===2){
//            return { value: "shanghai", done: false };
//         } else if(i===3) {
//           return { value: "bell", done: false };
//         }else{
//           return { done: true };
//         }
//       }
//     };
// };

// console.log([...str] );


// const Bar = {
//     bar() { console.log('bar') }
// };


// @mixin(Bar)
// class DecoratedClass {
//     //...
// }



// let obj = new DecoratedClass();
// obj.bar() // 'bar'



// function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list);
//   };
// }



// function* primeGen() {
//   for (let i=2 ; ; i++) {
//     let flag= true;
//     for(let j=2; j<i;j++){
//       if(i%j ==0){
//         flag = false;
//         break;
//       }
//     }
//     if(flag){
//       yield i;
//     }
//   }
// }

// var generator1 = primeGen();

// console.log(generator1.next()); // 2
// console.log(generator1.next()); // 3
// console.log(generator1.next()); // 5
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// async function getTitle(url) {
//   let response = await fetch(url);
//   let html = await response.text();
//   return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }

// getTitle('http://swapi.co/api/people/').then(console.log)



const str = 'Nokia';
[...str]

str[Symbol.iterator] = function() {
  let i = 0;
  return {
    next: function() {
        i++;
        if(i===1){
           return  { value: "nokia", done: false };
        }else if(i===2){
           return { value: "shanghai", done: false };
        } else if(i===3) {
          return { value: "bell", done: false };
        }else{
          return { done: true };
        }
      }
    };
};

console.log([...str]);