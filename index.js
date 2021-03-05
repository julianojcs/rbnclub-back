const express = require('express'), 
  app = express(),
  http = require('http').createServer(app),
  io = require('socket.io')(http),
  porta = process.env.PORT || 3002;
const conexao = require('./src/config/conexao');
  

http.listen(porta, () => {
});

conexao()

io.on('connection', (socket) => {
  var conectado = false;
  var spam = true;

  socket.on('disconnect', () => {

  });


});


// Routes
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static('public'));

app.use('/cdn', express.static(__dirname + '/public'));