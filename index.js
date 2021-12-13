// dependencies
const http = require('http');
const environment = require('./helpers/environment');
const { handleReqRes } = require('./helpers/handleReqRes');
const data = require('./lib/data');


// app object = module scaffolding
const app = {};

// testing the file
// data.create('test', 'newFile', { 'name': 'Bangladesh', 'language': 'Bangla' }, function (err) {
//     console.log(`Error was`, err);
// });
// data.read('test', 'newFile', (err, data) => {
//     console.log(err, data);
// });
// data.update('test', 'newFile', { 'name': 'England', 'language': 'English' }, (err) => {
//     console.log(err);
// });
data.delete('test', 'newFile', (err) => {
    console.log(err);
});
// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        // console.log(`environment variable is ${process.env.NODE_ENV}`);
        console.log(`LISTENING TO PORT ${environment.port}`);
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();