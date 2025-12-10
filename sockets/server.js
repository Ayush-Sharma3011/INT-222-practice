import { Socket } from 'dgram';
import net from 'net';

const server = net.createServer(Socket => {
    console.log("Client Connnected");

    Socket.write("Hello from server");
    Socket.on("data", (data) => {
        console.log("Client says :"+ data.toString());
    })
});

Socket.on("end", () => {
    console.log("Client Disconnected");
})