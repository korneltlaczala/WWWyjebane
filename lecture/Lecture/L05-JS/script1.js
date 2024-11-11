//'use strict'

console.log('script3');

//printName() //hoisting - function known 1st pass parsing
myName = 2 // correct with strict, unless declared var ... below, not correct with let or const
var myName = 'aa'
    //let myName = 'aa' // does not create a property of object, 'const' act the same
    //const myName = 'mm'

var b = 1; // vs b = 10; //global = window property

function printName() {
    // let b = 'x'
    var b = 'y'
    b = 'z' //with strict not allowed, the function scope when declared with var, window scope as the only
    this.b = 'zz' //strict -- this undefined because not set entering the function
    myName += 'x'
    console.log('printName: ', myName, b, window.b, window.b === this.b, this.b === b, this == window)
}

console.log('log , b: ', myName, window.b, this.b) //,b); // b  - not defined, b in scope of function
printName()

console.log('log: ', myName)

myName = 'bb'
    //var b; //vs b=2 - var -> hoisted b - undefined above, use strict does not affect
b = 2 //strict - undeclared b , without strict - declared implicite as window property
printName()
console.log('log: ', myName, b)

var x = 'global';
let y = 'global';
console.log(this.x); // "global" window property
console.log(this.y); // undefined