// Notice that core modules like os can be
// called without the preceding ./ as do
// manually created modules.

var os = require('os');

console.log('This code is running on: ' + os.type());
