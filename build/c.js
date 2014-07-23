var compiler = require('./modules/compiler.js');
	
//compile with google closure compiler
compiler.compile([
	'../store-restore-events.min.js'
	,'../demo/js/store-restore-events.min.js'
]
,[
	'../source/store-restore-events.js'
]
,[
	'externs/jquery-1.7.externs.js'
]);