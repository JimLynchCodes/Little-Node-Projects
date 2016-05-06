# Basic Require Object

This is an example that uses the 'require' keyword to load in other js files. In announcer.js I define an object for module.exports, and this object contains a method called "announce". Then in index.js I pull in the object eith 'require' and call it's announcer method. 

You can run this script like this:

*node index*

And it should output: 

*Announcing: Hello from Jimothy!*
