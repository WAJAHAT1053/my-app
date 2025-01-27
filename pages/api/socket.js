import { Server } from "socket.io";

const SocketHandler = (req,res) =>{
    console.log("called api")
    if (res.socket.server.io){
        console.log("socket is alread running")
    } else{
        const io = new Server(res.socket.server);
        res.socket.server.io = io

        io.on('connetion', (socket) => {
            console.log("server is connected")
        })
    }   
    res.end();
}


export default SocketHandler;