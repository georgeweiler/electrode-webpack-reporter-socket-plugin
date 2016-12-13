const socketio = require('socket.io');
exports.register = function(server, options, next) {
  const ioServer = server.select(options.connectionLabel);
  
  const io = socketio(ioServer.listener);
  io.on('connection', function(socket) {
    socket.emit('hmr')
  });
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
