
//#6
//try NOT to use raw for-loop and any extra variables for #6 exercise
var members = {
    0: {name: 'Jonathan', role: 'Dev', age: 15},
    1: {name: 'Richard', role: 'Dev', age: 20},
    2: {name: 'Lisa', role: 'Tester', age: 20},
    3: {name: 'Jelsy', role: 'LM', age: 30},
    4: {name: 'Eric', role: 'Tester', age: 25},
    length: 5
}

function groupMembersByRole(members) {
    return Array.from(members).reduce(function(pre,cur){
    	console.log(pre[cur.role]);
        pre[cur.role] = pre[cur.role] || [];
        pre[cur.role].push(cur);
        return pre;
    },{});
}

console.log(groupMembersByRole(members));