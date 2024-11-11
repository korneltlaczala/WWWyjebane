document.write('<p>Check the console for number and string comparison results</p>');

var a = 2;
var b = "2";
if (a == b)
    console.info('Equal    ', '2 == "2"');

if (a === b)
    console.info('Exact');
else
    console.info('Not exact', '2 !== "2"');

a = a + "";
if (a === b)
    console.info('Exact    ', 'After (2 + "")');
else
    console.info('Not exact');

a = Number(a);
b = Number(b);
if (a === b)
    console.info('Exact    ', 'After Number("2")');
else
    console.info('Not exact');
	
console.info(Number(""));
console.info(Number("2a"));
console.info(Number("a2"));
console.info(Number("2.1"));
console.info(Number("2,1"));
