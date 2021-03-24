const $ = document.querySelector.bind(document)
    
const inputName = $('.input-name')
const inputEmail = $('.input-email')
const inputPass = $('.input-password')
const submidBtn = $('.register-btn')
const errorName = $('.register-name-error')
const errorEmail = $('.register-email-error')
const errorPass = $('.register-password-error')
const errorCheck = $('.error-check')
const inputCheck = $('.check-rules')

console.log(inputCheck.checked)
$('.video-animed').play()   
    setInterval(function() {
        if ($('.video-animed').ended) {
            $('.video-animed').play()
        }
},3000)

submidBtn.onclick = function() {
    const sendName = inputName.value
    const sendEmail = inputEmail.value
    const sendPassword = inputPass.value
    if (inputCheck.checked) {
        createUser(sendName, sendEmail, sendPassword)
    } else {
        errorCheck.innerHTML = 'Please agree to the terms'
    }
}

$('.text-login').onclick = function() {
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/login.html')
}

inputName.oninput = function() {
    errorName.textContent = ''
}

inputEmail.oninput = function() {
    errorEmail.textContent = ''
}

inputPass.oninput = function() {
    errorPass.textContent = ''
}


function createUser(nameUser,email,password) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: nameUser,
            email: email,
            password: password
        })
    };
    fetch('https://f8team.dev/api/auth/chat-register', options)
        .then(response => {
            if (response.status === 409) {
                errorEmail.innerHTML = 'Email already exits'
            }
            return response.json()
        })    
        .then(result => {
            try {
                localStorage.setItem('token' , result.meta.token)
                location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/index.html')
            } catch (error) {
                throw result
            }
        })
        .catch(error => {
            for (const key in error.errors) {
                $(`.register-${key}-error`).innerHTML = error.errors[key][0]
            }  
        })
}


