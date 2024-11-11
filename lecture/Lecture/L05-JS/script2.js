'use strict'
console.log('script2');

var x = 1;
(function() {
    // 'use strict'
    a = 1;
    //let a = 2; //a cannot be used before let
    var a = 3; // hoisting, a can be used before var
    console.log('a', a, 'x', x);

    let b = 9;
    b = 8;
    // let b=7; //not allowed
    var a = 7; // allowed redeclaration
    console.log('let', b)

    const o = { name: "bob" }
    o.name = 'alice';

    console.log('a', a)
        //---------------
    function f() {
        console.log('a fa', a);
        var a = 6;
        console.log('a fa', a);
        console.log('a fa a', window.a);
        return 1;
    }

    {
        function f() {
            console.log('a fb', a);
            var a = 5;
            console.log('a fb', a)
            return 2;
        }
    }

    console.log(f() === 1); // true in strict
    // f() === 2 in non-strict mode

    function foo() {
        var bam = 'This is a not a global variable';
        //
        // [... Some code...]
        //
        ban = 'Typo and now you have a global variable';
    }

    function myLoop() {
        var sum = 0;
        for (i = 0; i < 10; i++) { // i was declared without var or let or const and hence, it’s global
            sum += i;
        }
        return sum;
    }

    function fun() {
        return this; // ===window (non-strict) / ===undefined (strict)
    };

    foo();
    myLoop();

    console.log('a', a)

})();

(function() {

    x = findMax(1, 123, 500, 115, 44, 88);
    console.log('x', x)

    function findMax() {
        var i;
        var max = -Infinity;
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }

})();