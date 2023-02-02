import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://poke-chat-socket-io.herokuapp.com/');

    return {
        provide: {
            io: socket
        }
    }
});