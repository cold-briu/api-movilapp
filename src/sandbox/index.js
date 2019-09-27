const socket = io();

const getNewUser = async () => {
    socket.emit('new-user', await prompt("tell us ur name"))
    console.log(`You Joined!`)
}

const newElement = (text, elementName, color) => {
    const txt = document.createTextNode(text)
    const container = document.createElement(elementName)
    container.appendChild(txt)
    container.className = `text-${color}`;
    return container
}

const handleSubmit = () => {

    document.querySelector('#formulario').addEventListener('submit', e => {
        e.preventDefault()

        const output = document.querySelector('#messages')
        const msg = document.querySelector('#m')

        socket.emit('new-msg', msg.value)
        output.appendChild(newElement("you said: " + msg.value, "LI", "muted text-right"))
        msg.value = ''
    });
}

const handleGeo = () => {
    document.querySelector('#geolocate').addEventListener('click', e => {

        if (!navigator.geolocation) {
            return alert('su navegador no soporta geo locate')

        }

        navigator.geolocation.getCurrentPosition(
            pos => {
                console.log('will send ', pos)
                socket.emit('new-geo', {
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                })
            },
            () => {
                alert('Unable to fetch location, try again')
            })
    })
}











handleGeo()

getNewUser()

handleSubmit()


socket.on('user-connected', name => console.log(`${name} Has Joined!`))


socket.on('user-disconnected', name => console.log(`${name} Is away!`))


socket.on('global-msg', incoming => {
    output.appendChild(newElement(`${incoming.name}: ${incoming.message}`, "LI", "light text-left"))
})



