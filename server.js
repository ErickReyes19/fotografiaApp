const express = require('express');
const cors = require('cors');
const dbConection = require('./database/config');
const init = require("./config/init.config");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosRoutePath = '/api/usuario';
        this.rutaAuth = '/api/auth';
        this.rutaCliente = '/api/cliente';
        this.rutaServicio = '/api/servicio';
        this.rutaSesion = '/api/sesion';

        this.middlewares();
        this.routes();

        //Rutas de mi aplicación
    }

    async syncDB() {
        try {
            
            const db = require("./models/rf");
            await dbConection.sync({
                force: true
            }).then(() => {
                init.initial();
            });
            console.log('base sincronizada');

        } catch (error) {
            console.log('error pai');
            console.log(error)
        }
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición
        this.app.use(express.urlencoded({ extended: true }));
        // Directorio público
        this.app.use(express.static('public'));

    }

    // Endpoints 
    routes() {
        // Ruta de usuarios api
        this.app.use(this.usuariosRoutePath, require('./routes/usuario.route'));
        this.app.use(this.rutaAuth, require('./routes/auth.routes'));
        this.app.use(this.rutaCliente, require('./routes/clientes.route'));
        this.app.use(this.rutaServicio, require('./routes/servicio.route'));
        this.app.use(this.rutaSesion, require('./routes/sesion.route'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }

}

module.exports = Server;
