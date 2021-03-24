const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let isOn = true
const switchBtn = $$('.switch')
const inputEmail = $('.section-login--user-name')
const inputPass = $('.section-login--password')
const submidBtn = $('.section-login--login-btn')

document.querySelector('.video-animed').play()
            
    setInterval(function() {
            if (document.querySelector('.video-animed').ended) {
                document.querySelector('.video-animed').play()
            }
    },3000)

submidBtn.onclick = function() {
    const sendEmail = inputEmail.value
    const sendPassword = inputPass.value
    getLogin(sendEmail, sendPassword)
}

$('.sign-up').onclick = function() {
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/register.html')
}

function getLogin(email,password) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email: email,
            password: password
        })
    };
    fetch('https://f8team.dev/api/auth/chat-login', options)
        .then(response => response.json())
        .then(result => {
            const token = result.meta.token
            localStorage.setItem('token', token)
            location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/index.html')
        })
        .catch(error => {
            console.log('error', error)
            inputPass.value = ''
            $('.error-login').innerHTML = '<i class="fas fa-times-circle error-icon"></i> Email or password is incorrect'
        });
}

