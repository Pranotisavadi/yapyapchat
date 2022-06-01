const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});


let users = [];

const addUser = (userId, socketId) => {
console.log("add user fired", users)
console.log(userId, socketId)
!users.some((user) => user.userId === userId) &&
  users.push({ userId, socketId });
  console.log("after push", users);
};

const removeUser = (socketId) => {
users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
console.log("getUser fired", users)
console.log("userId ", userId)
 return users.find((user) => 
    user.userId === userId
 )
};

io.on("connection", (socket) => {
//when connected
// console.log("this is io: ", io);
// console.log("this is socket:", socket);
console.log("a user connected: ");

io.emit("welcome", "hello this is socket server");
//take userId and socketId from user
socket.on("addUser", (userId) => {
  console.log("socket.on", userId)
  addUser(userId, socket.id);
  io.emit("getUsers", users);
});
console.log(users)
console.log(socket.id)
//send and get message
socket.on("sendMessage", ({ senderId, receiverId, text }) => {
  const user = getUser(receiverId);
  console.log("socket.on user ", user)
  io.to(user.socketId).emit("getMessage", {
    senderId,
    text,
  });
});

console.log("what is socket "+ users.socketId)
//when disconnect
socket.on("disconnect", () => {
  console.log("a user disconnected!");
  removeUser(socket.id);
  io.emit("getUsers", users);
});
});

