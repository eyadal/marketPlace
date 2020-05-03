let vehicle = [
    {
        id: 1,
        brand: 'mercedes',
        year: 2020,
        color: 'blue',
        horsePower: 455,
        model: 'amg sport',
        wheels: 4,
        regNr: 'UPO321'
    },
    {
        id: 2,
        brand: 'BMW',
        year: 2019,
        color: 'black',
        horsePower: 455,
        model: 'm sport',
        wheels: 4,
        regNr: 'ISO451'
    }, {
        id: 3,
        brand: 'AUDI',
        year: 2020,
        color: 'white',
        horsePower: 235,
        model: 'rs',
        wheels: 4,
        regNr: 'HAW873'
    },
    {
        id: 4,
        brand: 'Kawasaki',
        year: 2007,
        color: 'green',
        horsePower: 399,
        model: 'zz Sport',
        wheels: 2,
        regNr: 'POK644'
    },
    {
        id: 5,
        brand: 'Hundai',
        year: 2017,
        color: 'white',
        horsePower: 55,
        model: 'plupp',
        wheels: 3,
        regNr: 'LJK543'
    },
    {
        id: 6,
        brand: 'yamaha',
        year: 2011,
        color: 'pink',
        horsePower: 155,
        model: 'zupp',
        wheels: 3,
        regNr: 'GIG579'
    }

]

// Funktion för lägga till nytt fordons objekt
let vehicleInfo = document.createElement('p')
let mFor = function () {
    let objArr = []


    vehicle.forEach((item, i) => {
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
        document.querySelector('#vehicle').appendChild(myDiv)


    })
    return objArr



}

document.getElementById('showAll').addEventListener('click', e => {
    document.querySelector('#vehicle').innerHTML = ' '
    mFor()
})

document.querySelector('#formSubmit').addEventListener('click', (e) => {
    e.preventDefault()
    addVehicle()
})



let addVehicle = function () {
    let iBrand = document.getElementById('addBrandInput')
    let iYear = document.getElementById('addYearInput')
    let iColor = document.getElementById('addColorInput')
    let iHp = document.getElementById('addHpInput')
    let iModel = document.getElementById('addModelInput')
    let iWheels = document.getElementById('addWheelsInput')
    let iRegNr = document.getElementById('searchCarByRegNr')

    iBrand.addEventListener('change', e => { })
    iYear.addEventListener('change', e => { })
    iColor.addEventListener('change', e => { })
    iHp.addEventListener('change', e => { })
    iModel.addEventListener('change', e => { })
    iWheels.addEventListener('change', e => { })
    iRegNr.addEventListener('change', e => { })


    let mBrand = iBrand.value
    let mYear = Number(`${iYear.value}`)
    let mColor = iColor.value
    let mHp = Number(`${iHp.value}`)
    let mModel = iModel.value
    let mWheels = Number(`${iWheels.value}`)
    let mRegNr = iRegNr.value


    vehicle.push({
        id: vehicle.length + 1,
        brand: mBrand,
        year: mYear,
        color: mColor,
        horsePower: mHp,
        model: mModel,
        wheels: mWheels,
        regNr: mRegNr

    })
    return vehicle
}