const doc = document.getElementById("par");
function square(i) {
    //document.write("The call passed ", i, " to the function:" , "<P>square()<P>");
    const myp = document.createElement("p");
    //myp.innerText = "The call passed "+ i + " to the function:" + "<P>square()<P>";
    myp.innerHTML = "The call passed "+ i + " to the function:" + "<P>square()<P>";
    myp.classList.add("wazne");
    myp.setAttribute("style","color:red");
    doc.appendChild(myp);
    return i * i;
}

console.error("2222");
//this code is interpreted and executed when the header is parsed i.e.when the document is downloaded
//document.write("The square function has returned ", square(10));