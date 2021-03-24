const $ = document.querySelector.bind(document)

const token = localStorage.getItem('token')
getUser(token)
const btnSigIn = $('.section-loggin')
const btnSigUp = $('.section-register')
const avt = $('.login-avt')
const closeBtn = $('.close-btn')
const loginNav = $('.section-log-out .icon-wrapper')

document.querySelector('.animated-avt').play()   
setInterval(function() {
    if (document.querySelector('.animated-avt').ended) {
        document.querySelector('.animated-avt').play()
    }
},3000)

loginNav.onclick = function() {
    $('.nav').style.display = 'none'
    btnSigIn.style.display = 'block'
    btnSigUp.style.display = 'block'
    $('.name-home').style.display = 'none'
    $('.login-avt').style.display = 'none'
    $('.name-home').textContent = ''
    $('.name-nav').textContent = ''
    $('.wrapper-login .log-out-icon').style.display = 'none'
    logOut()
    localStorage.removeItem('token')
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/login.html')
}

$('.wrapper-login .log-out-icon').onclick = function() {
    $('.nav').style.display = 'none'
    btnSigIn.style.display = 'block'
    btnSigUp.style.display = 'block'
    $('.name-home').style.display = 'none'
    $('.login-avt').style.display = 'none'
    $('.name-home').textContent = ''
    $('.name-nav').textContent = ''
    $('.wrapper-login .log-out-icon').style.display = 'none'
    logOut()
    localStorage.removeItem('token')
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/login.html')
}

avt.onclick = function() {
    $('.nav').style.display = 'block'
}

closeBtn.onclick = function() {
    $('.nav').style.display = 'none'
}

btnSigIn.onclick = function() {
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/login.html')
}

btnSigUp.onclick = function() {
    location.assign('http://127.0.0.1:5500/f8_fek1/namql/LOL/register.html')
}

function getUser(token) {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    fetch('https://f8team.dev/api/auth/chat-me', options)
        .then(response => response.json())
        .then(result => {
            const nameUser = result.data.name
            const emailUser = result.data.email
            $('.name-home').textContent  = `Hi, ${nameUser}`
            $('.name-nav').textContent = emailUser
            $('.name-home').style.display = 'block'
            $('.login-avt').style.display = 'block'
            $('.wrapper-login .log-out-icon').style.display = 'block'
            btnSigIn.style.display = 'none'
            btnSigUp.style.display = 'none'
        })
        .catch(error => {
            console.log('error', error)
        });
}

function logOut() {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    fetch('https://f8team.dev/api/auth/chat-logout', options)
        .then(response => response.json())
        .then(result => {
        })
        .catch(error => {
            console.log('error', error)
        });
}


///
const g = $('.wrapper').getBoundingClientRect()
console.log(g)
const nav = $('.nav')
let toadoNav = nav.getBoundingClientRect()
console.log(toadoNav)
menuBar.animate([
    // keyframes
    {   
        transform: 'translateX(100%)' },
    {
        transform: 'translateX(0)'    
    }
  ], {
    // timing options
    duration: 500,
    easing: 'linear',
    
    // iterations: Infinity
  })
menuBar.style.transform = `translateX(0)`
