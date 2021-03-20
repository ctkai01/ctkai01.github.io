
const users = [1,2,3,4,5]
const messages = [6,7,8,9,10,11,12]

const htmls = users.map(user => {
                return messages.map(message => 
                    {
                        console.log(user)
                        console.log(message)

                    return  `
                    <div class="user-chat">
                        <p class="user-name">${user}</p>
                        <div class="bubble you">${message}</div>
                    </div>
                    `   
                })
})

inputName.onkeyup = function(e) {
    if (e.keyCode === ENTER_KEY) {
        if (inputName.value !== '') {
            $('.login-user').style.display = 'none'
        } else {
            $('.errro-name').style.display = 'block'
        }
    }
    sendName(inputName.value)
}

