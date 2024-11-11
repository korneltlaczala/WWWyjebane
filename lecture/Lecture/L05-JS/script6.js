//https://www.youtube.com/watch?v=V_Kr9OSfDeU&t=29s
//JavaScript Async Await

function makeRequest(location) {
    return new Promise((resolve, reject) => { //MUSZA BYC NAZWY
        console.log(`Make request to ${location}`) // !!!!! ` a nie '
        if (location === "Google") resolve('hi')
        else reject('nono')
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Proc resp')
        resolve(`extra ing ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('received resp')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => { console.log(err) })

async function doWork() {
    try {
        const reponse = await makeRequest('Google');
        console.log('resp2 rec')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

var cat = ">()<"
console.log(`${cat}`)
    //doWork()

//console.clear()
console.count()
console.time()
console.timeEnd()
console.assert(false, 'test')

let devices = [{
        name: 'iPhone',
        brand: 'Apple'
    },
    {
        name: 'Galaxy',
        brand: 'Samsung'
    }
]
console.table(devices)
console.table(devices, ['brand'])

//%c przekazuje formatowanie
console.log("%cThis is yellow text on a blue background %s.", "color:yellow; background-color:blue", ' ->test<-')