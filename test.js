const isDefined = require('./index');

var exportsExists = isDefined('exports');
console.log(exportsExists); // => true
 
var windowExists = isDefined('window');
console.log(windowExists); // => false

var documentExists = isDefined('document');
console.log(documentExists); // => false

