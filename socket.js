// import { Server } from "socket.io";

// const io = new Server({
//   cors: {
//     origin: "*",
//   },
// });
// var users = [];

// io.on("connection", async (socket) => {
//   console.log("a user connected", socket.id);

//   if (!users.some((u) => u.socket_id == socket.id)) {
//     const user = {
//       socket_id: socket.id,
//     };

//     const max = 500;
//     const min = 1;
//     const id = Math.floor(Math.random() * (max - min + 1) + min);
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then((response) => response.json())
//       .then(function (data) {
//         let name = data.name;
//         let url = data.sprites.other.dream_world.front_default;
//         if (name && url) {
//           user.poke_name = name;
//           user.avatar_url = url;
//         }
//       });

//     users.push(user);
//     socket.emit("connected", user);
//     io.emit("total users", users.length);
//   }

//   socket.on("disconnect", () => {
//     users = users.filter((u) => {
//       return u.socket_id !== socket.id;
//     });
//     io.emit("total users", users.length);
//   });

//   socket.on("message", function message(msg) {
//     const connectedUser = users.find((u) => u.socket_id == socket.id);
//     const data = {
//       message: msg,
//       sender: connectedUser,
//     };
//     io.emit("message", data);
//   });
// });

// export default defineEventHandler(() => {});
