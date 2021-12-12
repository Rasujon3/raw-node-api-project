// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')

// app object = module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`LISTENING TO PORT ${app.config.port}`);
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();