const Hapi = require('hapi');

// Init Server
const server = new Hapi.Server();
const server = new Hapi.Server();

// Add Connection
server.connection({
    port: 8000,
    host: 'localhost'
});


// Start Server
server.start((err) => {
    if(err){
        throw err;
    }

    console.log(`Server started at: ${server.info.uri}`);
});


