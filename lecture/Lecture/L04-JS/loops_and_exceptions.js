document.write('<p>Set breakpoints in loops and check exception results</p>');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
var i = 0;
//do .. while since IE 6
do {
    i += 1;
    console.log(i);
} while (i < 5);

for (var j = 0; j < 10; j++) {}

var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n;
}

/*JavaScript exceptions*/
try {
    noSuchFunction();
} catch (e) {
    console.error("TEST " + e); // pass exception object to error handler
}

try {
    throw "Some kind of an exception occured";
} catch (e) {
    console.error(e); // pass exception object to error handler
}