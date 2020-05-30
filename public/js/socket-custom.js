var socket = io();

//Escuchar
socket.on('connect', () => {
    console.log('Conectado al servidor');
});


socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jonay',
    mensaje: 'Hello world!'
}, (resp) => {
    console.log('Respuesta Server: ', resp);
});

socket.on('enviarMensaje', (msg) => {
    console.log(msg);
});