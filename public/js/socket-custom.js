var socket = io();
socket.on('connect', function(){
    console.log('Conectado al Servidor');
});
// on para escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el  Servidor');
});

// enviar inforacion
socket.emit('enviarMensaje', {
    usuario: 'Ramon Marquez',
    Mensaje: 'Hola Mundo'
    }, function(resp){
    console.log('Respuesta Server: ', resp);
    });

// Escuchar Informacion

socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor: ', mensaje);
})
