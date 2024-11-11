document.write('<p>Check the console for booleans evaluation</p>');

/*'Truth?' said Pilate. 'What is that?' (John 18,38)*/
if (1) { console.info('1 is true'); }
if ("1") { console.info('"1" is true'); }
if ("true") { console.info('"true" is true'); }
if (true) { console.info('true is true'); }

if (0) { console.info('0 is true'); } else { console.info('0 is false'); }
if ("") { console.info('"" is true'); } else { console.info('"" is false'); }
if ("0") { console.info('"0" is true'); }
if ("false") { console.info('"false" is true'); }
if (false) { console.info('false is true'); } else { console.info('false is false'); }
if (undefined) { console.info('ndefined is true'); } else { console.info('ndefined is false'); }
if (null) { console.info('null is true'); } else { console.info('fnull is false'); }
if (NaN) { console.info('NaN is true'); } else { console.info('NaN is false'); }

var c = true;
console.info('Plain boolean:             ', c);
console.info('After adding empty string: ', c + "");
console.info('After multiplying by 1:    ', c * 1);
console.info('After adding a number:     ', c + 12);
console.info('After concatenating:       ', c + "12");