var array = [1,2];
array['a'] = 3;
array[3] = 4;
//What's the result of array.length?

console.log(array.length);
console.log(array['a']);
console.log(array[2]);

array.length = 1;

console.log(array[3]);


console.log(0 in array)


var a = [null,null,null];
var a2 = [null,null,null];
var a1 = [,,,];

console.log(a == a2);