let account = [

]
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault()

    let fName = document.getElementById('fNameInput').value
    let lName = document.getElementById('lNameInput').value
    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passInput').value
    let rePassword = document.getElementById('rePassInput').value

    // validate password
    if (password !== rePassword) {
        return console.log('Enter the password correct.')
    } else {

        account.push({
            'firstName': fName,
            'lastName': lName,
            'email': email,
            'password': password
        })

        console.log('account created')
    }
})

