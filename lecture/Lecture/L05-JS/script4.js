var later;

function outer(outerVar) {
    let tmp = 1 // like a private member NOT PROPERTY
    later = function inner(innerVar) {
        tmp *= innerVar.length
        console.log(outerVar)
        console.log(innerVar, tmp)

    }
    return later;
}

const newFunction = outer('outside')

newFunction('inside')
later('test')
newFunction('inside2')

//----------------
var newFunction2 = (() => {
        let tmp = 1 // like a private member NOT PROPERTY
        later = function inner(innerVar) {
            tmp *= innerVar.length
            console.log(outerVar)
            console.log(innerVar, tmp)

        }
        return later;
    })() // <-------------------------- CLOSURE !!!!!!!!!!!

newFunction2()
    //----------------------


(() => {
    let tmp = 1 // like a private member NOT PROPERTY
    var helper = () => {}
    later = function inner(innerVar) {
        tmp *= innerVar.length
        console.log(outerVar)
        console.log(innerVar, tmp)

    }
    window.newFunction3 = inner;
})()

newFunction3()

// closure  = closed over
// Closure is when you have a function defined inside of another function, 
//  that inner function has access to the variables and scope of the outer function even if the outer function finishes executing 
//  and those variables are no longer accessible outside of that function

//closure - portable function scope

//module pattern

//npm init          //This utility will walk you through creating a package.json file.
//npm install -D webpack
//npx webpack