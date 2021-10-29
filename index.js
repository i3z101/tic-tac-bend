const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const IO_PORT = process.env.PORT || 8000
const {Server} = require('socket.io');

// const serevr = http.createServer(app);
const io = new Server(IO_PORT, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.get("/", (req, res)=> {
    res.send("hii");
})



app.listen(PORT);

// io.on("connection", (socket)=> {

//     socket.on("joinRoom", (args)=> {
//         socket.join(args.gameId);
//         socket.to(args.gameId).emit("startTimer");
//     })

//     socket.on("play", (args)=> {
//         socket.to(args.gameId).emit("done", args);
//     })

//     socket.on("finish", (args)=> {
//         socket.to(args.gameId).emit("finishGame", args);
//     })

//     socket.on("playAgain", (args)=>{
//         socket.nsp.to(args.gameId).emit("playAgain");
//     })
// })