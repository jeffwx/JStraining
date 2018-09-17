// class C {
//     constructor(id) {
//         this.id = id;
//     }
//     id() {
//         console.log( "Id: " + this.id );
//     }
// }

// var c1 = new C( "c1" );
// c1.id();

var url = 'http://www.example.com/index.html?id=100&name=xx&age=20';  
function test(key, value){  
    var u = url.replace(/(\\?|^|&|\#)name=([^&|^#]*)(&|$|#)/, "$1"+key+"="+value + "$3");   
    return u;  
}  
var r = test('name', 'meinv');console.log(r);  

var replacement = 'LTE'
var data = 'let ratLevel = RAT_LEVELS.DEFAULT'
var test = data.replace(/(let\s{1}ratLevel\s{1}=\s{1})(RAT_LEVELS.DEFAULT)/, '$1' + replacement);
console.log(test);

console.log(/(let\s{1}ratLevel\s{1}=\s{1})(RAT_LEVELS.DEFAULT)/.test('let ratLevel = RAT_LEVELS.DEFAULT'));

console.log("fff"+/let\s{1}ratLevel\s{1}=\s{1}RAT_LEVELS.LTE/.test('let ratLevel = RAT_LEVELS.LTE;'));

const verfiyRegx = new RegExp('let\s{1}ratLevel\s{1}=\s{1}'.concat("RAT_LEVELS.LTE"));

console.log("GGG"+verfiyRegx.test('let ratLevel = RAT_LEVELS.LTE;'));

console.log("GGG"+/let\s{1}ratLevel\s{1}=\s{1}RAT_LEVELS.LTE/.test(`
	const RAT_LEVELS = {
    LTE: 'LTE',
    SRAN: 'SRAN',
    DEFAULT: 'SRAN'
};
module.exports = {
    newInstance
};

function newInstance() {
    const excludedUrlsForLte = [];
    const excludedFeaturesForLte = [];

    let ratLevel = RAT_LEVELS.LTE;
    return {
`))