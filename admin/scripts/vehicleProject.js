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





// Filter funktion
let filterFunction = function (filter, value) {
    let obj = []

    vehicle.forEach((item) => {

        if (filter.toLowerCase() === 'brand'.toLowerCase()) {
            if (value.toLowerCase() === item.brand.toLowerCase()) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'year'.toLowerCase()) {
            if (value === item.year) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'color'.toLowerCase()) {
            if (value.toLowerCase() === item.color.toLowerCase()) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'horsePower'.toLowerCase()) {
            if (value.toLowerCase() === item.horsePower.toLowerCase()) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'model'.toLowerCase()) {
            if (value.toLowerCase() === item.model.toLowerCase()) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'wheels'.toLowerCase()) {
            if (value.toLowerCase() === item.wheels.toLowerCase()) {
                obj.push(item)
            }
        } else if (filter.toLowerCase() === 'regNr'.toLowerCase()) {
            if (value.toLowerCase() === item.regNr.toLowerCase()) {
                obj.push(item)
            }
        }
    })
    return obj

}
// Ligger i update!
// let editFunction = function (value, newFilter, newValue) {
//     let filter = 'regNr'
//     let index = []

//     vehicle.forEach((item, index) => {

//         if (value.toLowerCase() === item.regNr.toLowerCase()) {
//             if (newFilter === 'brand') {
//                 item.brand = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'year') {
//                 item.year = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'color') {
//                 item.color = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'horsePower') {
//                 item.horsePower = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'model') {
//                 item.model = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'wheels') {
//                 item.wheels = newValue
//                 // console.log(vehicle[index])
//             } else if (newFilter === 'regNr') {
//                 item.regNr = newValue
//                 // console.log(vehicle[index])
//             }
//         }
//     })
//     return index
// }








// // Funktion för lägga till nytt fordons objekt
// let vehicleInfo = document.createElement('p')
// let mFor = function () {
//     let objArr = []


//     vehicle.forEach((item, i) => {
//         let myDiv = document.createElement('div')
//         objArr = (
//             myDiv.innerHTML = `
//                 <h2>${item.brand}</h2>
//                     <p>year: ${item.year}</p>
//                     <p>color: ${item.color}</p>
//                     <p>horsePower: ${item.horsePower}</p>
//                     <p> model: ${item.model}</p>
//                     <p>wheels: ${item.wheels}</p>
//                     <p>regNr: ${item.regNr}</p>
//         `)
//         document.querySelector('#vehicle').appendChild(myDiv)


//     })
//     return objArr



// }

// document.getElementById('showAll').addEventListener('click', e => {
//     document.querySelector('#vehicle').innerHTML = ' '
//     mFor()
// })

// document.querySelector('#formSubmit').addEventListener('click', (e) => {
//     e.preventDefault()
//     addVehicle()
// })



// let addVehicle = function () {
//     let iBrand = document.getElementById('addBrandInput')
//     let iYear = document.getElementById('addYearInput')
//     let iColor = document.getElementById('addColorInput')
//     let iHp = document.getElementById('addHpInput')
//     let iModel = document.getElementById('addModelInput')
//     let iWheels = document.getElementById('addWheelsInput')
//     let iRegNr = document.getElementById('searchCarByRegNr')

//     iBrand.addEventListener('change', e => { })
//     iYear.addEventListener('change', e => { })
//     iColor.addEventListener('change', e => { })
//     iHp.addEventListener('change', e => { })
//     iModel.addEventListener('change', e => { })
//     iWheels.addEventListener('change', e => { })
//     iRegNr.addEventListener('change', e => { })

//     let mBrand = iBrand.value
//     let mYear = Number(`${iYear.value}`)
//     let mColor = iColor.value
//     let mHp = Number(`${iHp.value}`)
//     let mModel = iModel.value
//     let mWheels = Number(`${iWheels.value}`)
//     let mRegNr = iRegNr.value

//     vehicle.push({
//         brand: mBrand,
//         year: mYear,
//         color: mColor,
//         horsePower: mHp,
//         model: mModel,
//         wheels: mWheels,
//         regNr: mRegNr
//     })
//     return vehicle
// }






























let findVehicle = function () {

    document.querySelector('#searchCarByRegNr').addEventListener('change', e => {
        let searchRegNr = e.target.value
        let foundObj = []

        let searchRegNrObject = document.createElement('dl')

        vehicle.forEach((item, index) => {
            if (item.regNr.toLocaleLowerCase() === searchRegNr.toLowerCase()) {
                searchRegNrObject.innerHTML = ` 

                <h2>${item.brand}</h2>
                <dd>Year: ${item.year}</dd>
                <dd>Color: ${item.color}</dd>
                <dd>HorsePower: ${item.horsePower}</dd>
                <dd>Model: ${item.model}</dd>
                <dd>Wheels: ${item.wheels}</dd>
                <dd>Registration Nr: ${item.regNr}</dd>
                    `.split()
                //foundObj.push(item)
            } else {
                searchRegNrObject.textContent = `The reg number is not valid`
            }
            document.querySelector('#vehicle').appendChild(searchRegNrObject)
        });

        return foundObj
    })
}


let test = function () {

    vehicle.forEach(item => {
        let brand = document.createElement('h2')
        let year = document.createElement('p')
        let color = document.createElement('p')
        let hp = document.createElement('p')
        let model = document.createElement('p')
        let wheels = document.createElement('p')
        let regNr = document.createElement('p')

        brand.textContent = item.brand
        year.textContent = item.year
        color.textContent = item.color
        hp.textContent = item.horsePower
        model.textContent = item.model
        wheels.textContent = item.wheels
        regNr.textContent = item.regNr

        document.querySelector('#vehicle').appendChild(brand)
        document.querySelector('#vehicle').appendChild(year)
        document.querySelector('#vehicle').appendChild(color)
        document.querySelector('#vehicle').appendChild(hp)
        document.querySelector('#vehicle').appendChild(model)
        document.querySelector('#vehicle').appendChild(wheels)
        document.querySelector('#vehicle').appendChild(regNr)
    })



}

// findVehicle else sats fix
// addVehicle function to html