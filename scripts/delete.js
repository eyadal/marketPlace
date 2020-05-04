let vehicle = [
    {
        id: 1,
        brand: 'MERCEDES',
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
        brand: 'KAWASAKI',
        year: 2007,
        color: 'green',
        horsePower: 399,
        model: 'zz Sport',
        wheels: 2,
        regNr: 'POK644'
    },
    {
        id: 5,
        brand: 'HYUNDAI',
        year: 2017,
        color: 'white',
        horsePower: 55,
        model: 'plupp',
        wheels: 3,
        regNr: 'LJK543'
    },
    {
        id: 6,
        brand: 'YAMAHA',
        year: 2011,
        color: 'pink',
        horsePower: 155,
        model: 'zupp',
        wheels: 3,
        regNr: 'GIG579'
    }

]
// console.log(vehicle)
// skriver ut alla parametrar i ett item.
let mySelection = document.getElementById('selectCar')



const deleteItem = vehicle.map(car => {
    let myOpt = document.createElement('option')
    myOpt.setAttribute('id', `${car.id}`)
    myOpt.innerHTML = `<label>${car.brand}</label>`
    mySelection.appendChild(myOpt)
});


// for (let i = 0; i < vehicle.length; i++) {
//     let myOpt = document.createElement('option')
//     myOpt.setAttribute('id', `${vehicle[i].id}`)
//     myOpt.innerHTML = `<label>${vehicle[i].brand}</label>`
//     mySelection.appendChild(myOpt)
// }

let j = mySelection.selectedIndex
mySelection.addEventListener('change', (e) => {
    j = mySelection.selectedIndex
    myForm[0].value = vehicle[j].brand
    myForm[1].value = vehicle[j].year
    myForm[2].value = vehicle[j].color
    myForm[3].value = vehicle[j].horsePower
    myForm[4].value = vehicle[j].model
    myForm[5].value = vehicle[j].wheels
    myForm[6].value = vehicle[j].regNr
})

document.querySelector('#formSubmit').addEventListener('click', (e) => {
    e.preventDefault()
    updateVehicle()
})

let updateVehicle = function () {
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


    vehicle.splice(j, 1)
    console.log(vehicle)
    return vehicle
}









// vehicle.entries().forEach(
//     ([key, value]) => console.log(key, value)
// );



// for (let [vehicle, allInputs] of Object.entries(allInputs)) {
//     console.log(vehicle, allInputs);
// }


// let myForm = document.getElementById('myForm').getElementsByTagName("vehicleInput");
// for (var i = 0, len = myForm.ch; i < len; i++) {
//     console.log(myForm)
//     // allTags[i] is an element within the container object
//     // allTags[i].id is the id of the element (if there is one)
// }


// for (let i = 0; i < myForm.length - 1; i++) {
//     console.log(myForm[i].value = `${vehicle[i].brand}`)
// }






// let myForm = document.querySelectorAll("input");
// for (const myForm of vehicleInput.values()) {
//     console.log('bRAND: ', myForm);
// };




// let test1 = `${myForm[0].value = vehicle[0].brand}
// ${myForm[1].value = vehicle[0].year}
// ${myForm[2].value = vehicle[0].color}
// ${myForm[3].value = vehicle[0].horsePower}
// ${myForm[4].value = vehicle[0].model}
// ${myForm[5].value = vehicle[0].wheels}
// ${myForm[6].value = vehicle[0].regNr}`

// console.log(test1)