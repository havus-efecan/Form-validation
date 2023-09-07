const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
const zipInput = document.querySelector('#zip')
const passwordInput = document.querySelector('#password')
const confirmInput = document.querySelector('#confirm')


const form = document.querySelector('#form')

emailInput.addEventListener('input',()=>{

    if(!emailInput.validity.valid){

        if(emailInput.validity.typeMismatch){
            emailInput.setCustomValidity('Must enter an email address')
        }

    }
    emailInput.setCustomValidity('');

})

countryInput.addEventListener('input',()=>{

    if(!countryInput.validity.valid){
        if(countryInput.validity.tooLong){
            countryInput.setCustomValidity('Input too long')

        } 
    }
    countryInput.setCustomValidity('');


})

zipInput.addEventListener('input',()=>{

    if(!zipInput.validity.valid){
        if(zipInput.validity.patternMismatch){
            zipInput.setCustomValidity('Must match pattern')

        } 
    } 
    zipInput.setCustomValidity('');

})

passwordInput.addEventListener('input',()=>{

    if(!passwordInput.validity.valid){
        if(passwordInput.validity.patternMismatch){
            passwordInput.setCustomValidity('Must be minimum 8 character long with at least one uppercase, one number, and one symbol')
        } 
    }
    passwordInput.setCustomValidity('');

})



form.addEventListener('submit',(e)=>{

    password = passwordInput.value

    if(password != confirmInput.value){
        e.preventDefault()
        
        confirmInput.setCustomValidity('Passwords must match')
    }
})


