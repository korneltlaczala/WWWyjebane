function square(i) {
    document.write("The call passed ", i, " to the function:" , "<P>square()<P>");
    return i * i;
}

console.error("2222");
//this code is interpreted and executed when the header is parsed i.e.when the document is downloaded
document.write("The square function has returned ", square(10));