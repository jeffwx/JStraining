//#11
//Given an object obj, please utilize destructuring assignment and template string to output a string 
//"Hello World!"  
//"I am Jonathan." 
//#14
//given a string below 
// var s = '𠮷a';

// //The result is true or false? 
// console.log(s.codePointAt(0) ===  '𠮷'.codePointAt(0)); //answer:
// console.log(s.codePointAt(2) === 'a'.charCodeAt(0));  //answer:

//How to convert the code point of '𠮷' to the hexadecimal?
//write your implementation below:




//Given the loop below to loop the string. What would be printed to the console?
// for (let i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }
//Your answer:
//Given the code below, what would be printed to the console? 
// const data = [
//     { first: '<Jane>', middle: 'Hebe', last: 'Bond' },
//     { first: 'Lars', middle: 'Zack', last: '<Croft>' },
// ];
// //Please write a function to generate a HTML table(hint: use template string)

// function tableTmpl(data) {
//   //write your implementation here:
//   return `
//   <table>
//    <tbody>
// 	  ${data.map(dt => `
// 	    <tr><td>${dt.first}</td></tr>
// 	    <tr><td>${dt.middle}</td></tr>
// 	    <tr><td>${dt.last}</td></tr>
// 	  `).join('')}
//    </tbody>
//   </table>
// `;
// }


// console.log(tableTmpl(data));
//the output looks like:
// <table>
//   <tbody>
//    <tr>
//       <td><Jane></td>
//       <td>Hebe</td>
//       <td>Bond</td>
//    </tr>
//    <tr>
//       <td>Lars</td>
//       <td>Zack</td>
//       <td><Croft></td>
//    </tr>
//   </tbody>
// </table>


//#18
//Given the code below
// const keyA = {a: 1};
// const keyB = {b: 2};
// const myObject = {
//   method() {
//     return "Hello!";
//   },
//   [keyA]: 'valueA',
//   [keyB]: 'valueB'
// };

// //What is myObject, please write this object in literally in ES5 below 
// myObject  // your answer:


// var duplicatedArray = [1,2,3,3,2,5,6,7,1];
// //Write a function to return a new Array which contains no duplicated value: [1,2,3,5,6,7]
// function removeDuplciatedValues(data) {
//   return Array.from(new Set(data));
// }

// console.log(removeDuplciatedValues(duplicatedArray));

// var obj = {
// 	field: 'hello',
// 	getFiled: () => {
// 		console.log(this.field);
// 		console.log(this);
// 	}

// };

// obj.getFiled();

// for(let i=0;i<10;i++){
// 	var i =2;
// 	console.log(i);
// }
var o;
let o;
