const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
//const port = 3000; // You can choose any port

// Middleware to handle JSON data
app.use(express.json());

// Serve static files from the 'public' directory (optional)
app.use(express.static(__dirname + '/dist/franquia-agencia-pagamento'));

// Mount JSON Server at the '/api' endpoint
app.use('/api', jsonServer.defaults()); // Add default middlewares (logger, static, cors and no-cache)
app.use('/api', jsonServer.router(path.join(__dirname, '/data/db.json')));

// Optional: Custom Express routes can be added here before or after JSON Server

//app.get('/', (req, res) => {
  //res.send('Express server is running with JSON Server!');
//});

app.get('/*', function(req, res){
    res.sendFile(__dirname +  '/dist/franquia-agencia-pagamento/index.html');
});

// Start the server
//app.listen(port, () => {
  //console.log(`Server is running on port ${port}`);
//});

app.listen(process.env.PORT || 4200);