var members = {
    0: {name: 'Jonathan', role: 'Dev', age: 15},
    1: {name: 'Richard', role: 'Dev', age: 20},
    2: {name: 'Lisa', role: 'Tester', age: 20},
    3: {name: 'Jelsy', role: 'LM', age: 30},
    4: {name: 'Eric', role: 'Tester', age: 25},
    length: 5
}


// var a = Array.from(members);


// var ab = Array.prototype.slice.call(members);

// console.log(ab);


// function groupMembersByRole(members) {
//     return Array.from(members).reduce(function(pre,cur){
//         pre[cur.role] = pre[cur.role] || [];
//         pre[cur.role].push(cur);
//         return pre;
//     },{});
// }

// console.log(groupMembersByRole(members));


function getMembersWithDep(members) {
     //return Array.from(members).map(function(item){return {name: item.name, role: item.role, age: item.age, department: 'UICA'};

        return Array.from(members).map(function(item){return Object.assign(item,{department: 'UICA'})});

        //object.assingn({department: vl})
}
console.log(getMembersWithDep(members)); 

// function substractAges(persons, base) {
//     return Array.from(members).reduce(function( age, cur ){
//     	return age - cur.age;
//     },base);
// }
// console.log(substractAges(members, 1000));


// function getNames(persons) {
//     return Array.from(members).map(function(item){return item.name}).join(' | ');
// }
// console.log(getNames(members)); // 'Jonathan | Richard | Lisa | Jelsy | Eric'


// function getDevs(persons) {
//     return Array.from(members).filter(function(item){return item.role === 'Dev'}).map(function(item){return item.name});
// }
// console.log(getDevs(members)); // ['Jonathan', 'Richard']


// function getMembersWithDep(persons) {
//      return Array.from(members).map(function(item){return {name: item.name, role: item.role, age: item.age, department: 'UICA'};
//  });
// }
// console.log(getMembersWithDep(members)); 

// function isAllTesters(persons) {
//     return Array.from(persons).filter(function(item){return item.role === 'Tester'}).length === persons.length;
// }
// console.log(isAllTesters(members));

//Write a function to return get the first member who is LM
// function findFirstLM(persons) {
//     return Array.from(persons).find(member => member.role === 'LM');
// }
// console.log(findFirstLM(members)); // {name: 'Jelsy', role: 'LM', age: 30}

// function findFirstLM(persons) {
//     return Array.from(persons).filter(function(item){return item.role === 'LM'})[0];
// }

// console.log(findFirstLM(members));


// var anotherMembers = [
//     {name: 'CJ', role: 'Dev', age: 15},
//     {name: 'Candy', role: 'PO', age: 20},
//     {name: 'Emma', role: 'Dev', age: 20}
// ]
// // //Write a function to combine members and anotherMembers to one group(array).
// // function combineMembers(persons, anotherPersons) {
// //      return Array.from(persons).concat(anotherPersons);
// // }
// // console.log(combineMembers(members, anotherMembers));



// // function findFirstTwoMembersOver18(persons) {
// //     return Array.from(persons).filter(function(item){return item.age >18}).slice(0,2).map(function(item){return item.name + " is " + item.age +" old "})

// // }
// // console.log(findFirstTwoMembersOver18(members)); 


// var myFish = ["angel", "clown", "mandarin", "surgeon"];

// //从第 2 位开始删除 0 个元素，插入 "drum"
// var removed = myFish.splice(1,0,"aaa");

// console.log(myFish); 