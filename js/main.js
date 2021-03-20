const $ = document.querySelector.bind(document)

const sentBtn = $('.write-link.send')
const inputText = $('.press-input')
const inputName = $('.input-name')
const sentNameBtn = $('.btt-start')

const ENTER_KEY = 13

if (localStorage.length !== 0) {
    document.querySelector('.login-user').style.display = 'none'
}
//User
sentNameBtn.onclick = function() {
    let nameInput = inputName.value
    if (inputName.value !== '') {
       $('.login-user').style.display = 'none'
   } else {
       $('.errro-name').style.display = 'block'
   }
   sendName(nameInput)
}

inputName.onkeyup = function(e) {
    if (e.keyCode === ENTER_KEY) {
        if (inputName.value !== '') {
            $('.login-user').style.display = 'none'
            sendName(nameInput)
        } else {
            $('.errro-name').style.display = 'block'
        }
    }
    sendName(inputName.value)
}

inputName.oninput = function() {
    $('.errro-name').style.display = 'none'
}
const ID = Number(localStorage.getItem('id'))

//Mess
inputText.onkeyup = function(e) {
    if (e.keyCode === ENTER_KEY) {
        sendMess(inputText.value, ID )
    }
}

sentBtn.onclick = function(event) {
    sendMess(inputText.value, ID)
}

//Render
function render() {
    function fetchUser() {
        return fetch('https://f8team.dev/api/chat-users')
                .then(response => response.json())
    }
    function fetchMessage() {
        return fetch('https://f8team.dev/api/chat-messages')
                .then(response => response.json())
    }
    let i = 0
    Promise.all([fetchUser(), fetchMessage()])
        .then(([users, messsages]) => {
            let listPeople = $('.chat')
            const htmls = messsages.data.map((messsage,index) => {
                return users.data.map((user,index) => {
                    let IDname
                    
                    if (messsage.chat_user_id === user.id) {
                        IDname = user.name
                        if (messsage.chat_user_id === ID) {
                            return `
                                <div class="user-chat me">
                                    <p class="user-name">${IDname}</p>
                                    <div class="bubble me">${messsage.body}</div>
                                </div>
                                `
                        } else {
                            return `
                                <div class="user-chat">
                                    <p class="user-name">${IDname}</p>
                                    <div class="bubble you">${messsage.body}</div>
                                </div>
                                `
                        }
                    }                   
                })
            })
            listPeople.innerHTML = htmls.toString().split(',').join("") 
        })
}

render()
setInterval(render, 1000)
function sendMess(message, id) {
    const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    chat_user_id: id,
                    body: message
                })
            };
            fetch('https://f8team.dev/api/chat-messages', options)
                .then(response => response.json())
                .then(result => {
                    render()
                    inputText.value = ''
                })
                .catch(error => {
                    console.log('error', error)
                }); 
}

function sendName(nameUser) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: nameUser
        })
    };
    fetch('https://f8team.dev/api/chat-users', options)
        .then(response => response.json())
        .then(result => { 
            localStorage.setItem('id',result.data.id)
        })
}

