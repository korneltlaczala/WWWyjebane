// Old compatibility code, no longer needed.
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    xhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log('xhttp function this: window vs. xhttp, this === window, this === xhttp);
        resp = this.responseText;
        jresp = JSON.parse(resp);
        document.getElementById("demo").innerText = resp;
        document.querySelector("#name").innerText = jresp['results'][0]['name']['first'];
    }
};
xhttp.open("GET", "https://api.randomuser.me", true);
xhttp.send();

// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise.then(), promise.catch(), and promise.finally()
// replace callback-based solutions

var p = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a > 0.5) {
        resolve({ txt: 'ok', val: a })
    } else {
        reject({ txt: 'fail', val: a })
    }

})

//on success - firts argument function         //on failure secons argument function
p.then((ok) => { console.log('mypromise', ok) } //, (fail) => { console.log('myfail', fail) })
    // handling differences    
).catch((ok) => { //ok - just a name for parameter - reject
    console.log('noooo', ok)
})


// Promise in:
//- FETCH API - fetch() global method   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//  - Promise - returned from fetch(), then() - return HTTP Response promise (reading a stream)
//  - add HTTP extensions, CORS
//  - resolves with a Response object (representing HTTP response)
//- Service workers - in paralel, HTML5

url = 'https://api.randomuser.me'

var mydata;

fetch(url)
    .then(function(first) { console.log('first is HTTP response - have status', first.status); return first.json(); })
    //.then(response => response.json())
    .then(data => {
        console.log('data', data, typeof data);
        mydata = data["results"][0]["email"]; //data;
        document.querySelector(".data").textContent = JSON.stringify(data);
        document.querySelector(".ret").textContent = data["results"][0]["email"]; //toString => [Objetc object]
    });

console.log('mydata', mydata);



var tmp = 2

function outer2(url) {
    tmp = 1
    console.log('outer2', this === window, url)
    var fp = fetch(url)
    fp.then( //local arrow function
        (response) => {
            tmp *= response.status;
            console.log('=>', this === window)
            console.log('==>', url, tmp, response)

        }).catch((reject) => { console.log('can not serve : ', url, reject) });
    //}, (reject) => { console.log('can not serve : ', url, reject) });
}

//RUN LOCAL HTTP
outer2('index.html')
    // outer2('http://192.168.1.5/index.html') //runing on external
    // console.log('http://192.168.1.5')
outer2('data.json')
outer2('no.json')



async function getData(url = '', data) {
    // Default options are marked with *
    const response = await fetch(url, { //				 init object
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/xml',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //----------------------------------------------------------------------------!!!!!!!    
            //, body: JSON.stringify(data) // when POST, body data type must match "Content-Type" header
            //----------------------------------------------------------------------------!!!!!!!
    });

    return response.json() // parses JSON response into native JavaScript object !!!!!!
}