# is-defined-eval

Checks if a variable is defined

(Eval)uates a variable `identifier` like this: 

	'typeof ' + identifier + ' !== "undefined"'

Example (on nodejs in console): 

~~~js
	const isDefined = require('is-defined-eval');

	var exportsExists = isDefined('exports');
	console.log(exportsExists); // => true
 
	var windowExists = isDefined('window');
	console.log(windowExists); // => false
~~~

License MIT
