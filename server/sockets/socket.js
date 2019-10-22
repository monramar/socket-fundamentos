const { io }= require('../server');

io.on('connection', (client)=>{

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta aplicacion'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario Desconectado');
    });

    // Escuchar el Cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo Salio Bien'
        //     });
        // } else{
        //     callback({
        //         resp: 'Todo Salio MAL!!!!!'
        //     });
        // }
        
    });
    
})
