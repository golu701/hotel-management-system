const dotenv = require("dotenv");
dotenv.config({path: './.env'});
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const debug = require('debug')('server:server');
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBro = require('admin-bro');
const options = require('./admin/admin.options');
const admin = new AdminBro(options);
const ADMIN = {
    email: 'admin@gmail.com',
    password: 'admin',
}
const router = AdminBroExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
        if (ADMIN.password === password && ADMIN.email === email) {
            return ADMIN
        }
        return null
    },
    cookieName: 'admin',
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
})
const corsOptions = {
    origin: true,
    credential: true
}
const port = process.env.PORT || '3000';
// db connection
require('./db/connection')
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use( express.static("public"));

app.get("/", (req,res) => {
    // res.render("index")
})

// list of urls

// app.use("/post", routes.post);
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
app.use(admin.options.rootPath, router);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
