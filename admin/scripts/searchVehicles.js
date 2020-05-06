let vehicle = [
    {
        brand: 'MERCEDES',
        year: 2020,
        color: 'blue',
        horsePower: 455,
        model: 'amg sport',
        wheels: 4,
        regNr: 'UPO321'
    },
    {
        brand: 'BMW',
        year: 2019,
        color: 'black',
        horsePower: 455,
        model: 'm sport',
        wheels: 4,
        regNr: 'ISO451'
    },
    {
        brand: 'BMW',
        year: 2021,
        color: 'white',
        horsePower: 555,
        model: 'm sport',
        wheels: 4,
        regNr: 'TIM111'
    }, {
        brand: 'AUDI',
        year: 2020,
        color: 'white',
        horsePower: 235,
        model: 'rs',
        wheels: 4,
        regNr: 'HAW873'
    },
    {
        brand: 'KAWASAKI',
        year: 2007,
        color: 'green',
        horsePower: 399,
        model: 'zz Sport',
        wheels: 2,
        regNr: 'POK644'
    },
    {
        brand: 'HONDA',
        year: 2017,
        color: 'white',
        horsePower: 55,
        model: 'TMX 155 ',
        wheels: 3,
        regNr: 'LJK543'
    },
    {
        brand: 'YAMAHA',
        year: 2020,
        color: 'pink',
        horsePower: 155,
        model: 'TriCity 300',
        wheels: 3,
        regNr: 'GIG579'
    },
    {
        brand: 'FORD',
        year: 2021,
        color: 'silver',
        horsePower: 689,
        model: 'mustang',
        wheels: 4,
        regNr: 'OPI389'
    }

]


// starts here
// Funktion för lägga till nytt fordons objekt
let vehicleInfo = document.createElement('p')
let mFor = function () {
    let objArr = []


    vehicle.map((item, i) => {
        let myDiv = document.createElement('div')
        myDiv.setAttribute('class', 'cards')
        objArr = (
            myDiv.innerHTML = `
                <h2>${item.brand}</h2>
                    <p>year: ${item.year}</p>
                    <p>color: ${item.color}</p>
                    <p>horsePower: ${item.horsePower}</p>
                    <p> model: ${item.model}</p>
                    <p>wheels: ${item.wheels}</p>
                    <p>regNr: ${item.regNr}</p>
                    <p>id: ${item.id}</p>
        `)
        document.querySelector('#allVehicle').appendChild(myDiv)


    })
    return objArr
}

// Finish here



let myH2Tag = document.createElement('h2')

let myH2Generator = function (value) {
    myH2Tag.setAttribute('id', 'h2El')
    myH2Tag.innerHTML = value
    document.body.appendChild(myH2Tag)
}




//  let myh2El = document.createElement('h2')
//  myh2El.setAttribute('id', 'display')
//  document.body.appendChild(myh2El)

document.addEventListener('submit', e => {
    e.preventDefault()
})

function getName() {
    let name = document.getElementById('textInputElement').value
    myH2Generator(name)

    if (name === 'yamaha') {
        document.querySelector('#allVehicle').innerHTML =' '
        myH2Tag.innerHTML = 'This is a yamaha car.'
    } else if (name === 'kawasaki') {
        document.querySelector('#allVehicle').innerHTML = ' '
        myH2Tag.innerHTML = 'det här är en motorcykel'
    } else {
        document.querySelector('#allVehicle').innerHTML = ' '
        myH2Tag.innerHTML = 'värdet uppfattades inte'
        mFor()
    }
}

document.getElementById('searchBtn').addEventListener('click', getName)
mFor()




// 1. input type text -> (#idNamn)
// 2. skapa en lyssnare

// let checkValue = function (userValue) {
//     if (userValue === 'yamaha') {
//         console.log('This is a yamaha car.')
//     } else if (userValue === 'kawasaki') {
//         console.log('det här är en motorcykel')
//     } else {
//         console.log('värdet uppfattades inte')
//     }
// }



 // ____________________________________________________ //
// Sammanfattning 25/4-2020

// Javascript läses uppifrån och ner
// En funktion läses endast vid anrop
// För att läsa en variabel från funktioner måste den vara global.
// e.preventDefault() används för att inte ladda om sidan. vid första anrop endast.
// placeringen av koden avgör vad som ska läsas in.