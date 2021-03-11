const express = require('express'); 


const app = express(); 
const server = require('http').Server(app); // создает сервер, работающий через переменную app
const io = require('socket.io')(server,{cors:{origin:"*"}}); 

app.use(express.json()); 

const rooms = new Map(); 

app.get('/rooms', function(req, res){
    rooms.set(); 
    res.json(rooms); 
});

app.post('/rooms', (req, res) => {
    const {roomID, userName } = req.body; 
    if(!rooms.has(roomID))
    {
        rooms.set(roomID, new Map([
            ['users', new Map()], 
            
            ['messages', []]
        ])
        ); 
    }
    res.send(); 
}); 



io.on('connection', socket => {
    console.log('socket connected', socket); 
}); 


server.listen(3333, (err) => {
    if(err){
        throw Error(err); 
    }
    console.log('Запущено'); 
}); // следить за портом

