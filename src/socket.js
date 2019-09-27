
const { ioPort } = require('./config')
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
// const io = require('socket.io')(ioPort)

const users = {}

io.on('connection', socket => {
    console.log(`☘️ ·· ${
        (users[socket.id]) ?
            users[socket.id].name : socket.id
        } has conected`);

    socket.on('new-msg', message => {
        socket.broadcast.emit('global-msg', { message, name: users[socket.id].name })
    })

    socket.on('new-user', name => {
        users[socket.id] = { name }
        console.log(`· · @${name} Se ha conecto`)
        socket.broadcast.emit('user-connected', name)
    })

    socket.on('new-geo', coords => {
        console.log(`${
            (users[socket.id]) ?
                users[socket.id].name
                : socket.id
            } Está en:\n
            lat: ${coords.lat}\n
            long: ${coords.long}
            `);
    })

    socket.on('disconnect', function () {
        socket.broadcast.emit('user-disconnected',
            (users[socket.id]) ?
                users[socket.id].name : socket.id);

        console.log(`🍁 -- ${
            (users[socket.id]) ?
                users[socket.id].name : socket.id
            } has disconected`);
    });

})


http.listen(ioPort, () => console.log(`🐠 Socket listening on ${ioPort}...`))

app.use('/', express.static(__dirname + '/sandbox'))

app.get('/', (req, res) => res.status(200).sendFile(__dirname + '/sandbox/index.html'))