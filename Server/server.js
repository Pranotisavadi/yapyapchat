const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const authRoute = require("./app/routes/auth");
const usersRoute = require("./app/routes/users");
const conversationsRoute = require("./app/routes/conversations");
const messagesRoute = require("./app/routes/messages");
require("dotenv").config();
const path = require("path");

app.use(express.json());

// app.listen("8000", ()=> {
//     console.log("Backend is running")
// })

//Setting up socket connection
const io = require("socket.io")(server,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
});

io.on('connection', (socket) => {
  console.log("Connected to video socket")
  socket.emit('me', socket.id);
  console.log("socket is: " + socket.id)

  socket.on("callUser", ({ userId, signalData, from, name }) => {
    console.log("userId: " + userId)
    io.to(userId).emit("callUser", { signal: signalData, from, name})
  });

  // socket.on("callUser", (data) => {
  //   // console.log("caller data: ", data)
	// 	io.to(data.userId).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	// })
  
  socket.on("answerCall", (data) => {
    console.log("answer data: " + data)
    io.to(data.to).emit("callAccepted", data.signal)
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit("callEnded");
  });

})

app.use(cors({
  origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',

  credentials :true}))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))
  const db = require("./app/models");


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  app.use("/api/auth", authRoute);
  app.use("/api/users", usersRoute)
  app.use("/api/conversations", conversationsRoute);
  app.use("/api/messages", messagesRoute);


  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
  })
  
  const PORT = process.env.PORT || 8000;

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

