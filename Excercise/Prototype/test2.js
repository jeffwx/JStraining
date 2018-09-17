// class C {
//     constructor(id) {
//         this.id = id;
//     }
//     id() {
//         console.log( "Id: " + this.id );
//     }
// }

// var c1 = new C( "c1" );
// console.log(c1.id); //Your answer: Uncaught TypeError: c1.id is not a function

for(var i=0;i <10;i++){
	//var j =i;
	(function (argument) {
		// body...
		var j =i;
		setTimeout(function () {
			console.log(j);
		},0);
	})();
}