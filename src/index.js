'use strict';
require("babel-register");
const app = require('./app');

// app.seed().then(() => {
	const port = app.get('port');
	const server = app.listen(port);

	server.on('listening', () =>
	  console.log(`Feathers application started on ${app.get('host')}:${port}`)
	);
// }).catch(err => {
//   // ...
// });
