var socket = io.connect('https://presentation-sync.herokuapp.com');
socket.emit('add user', 'oeway');
socket.emit('new message',document.URL);
// Whenever the server emits 'new message', update the chat body
socket.on('new message', function (data) {
          if (data.message.indexOf('docs.google.com/presentation') > -1)
          window.location.assign(data.message);
          });
var oldLocation = location.href;
setInterval(function() {
            if(location.href != oldLocation) {
            socket.emit('new message',location.href);
            oldLocation = location.href
            
            }
            }, 300);
