const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const authRoute = require("./app/routes/auth");
const usersRoute = require("./app/routes/users");
const conversationsRoute = require("./app/routes/conversations");
const messagesRoute = require("./app/routes/messages");
app.use(express.json());

// app.listen("8000", ()=> {
//     console.log("Backend is running")
// })

const io = new Server(server);


app.use(cors({origin: "http://localhost:3000", credentials :true}))

app.use(express.urlencoded({ extended: true }));
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
  app.use("/api/users", usersRoute);
  app.use("/api/conversations", conversationsRoute);
  app.use("/api/messages", messagesRoute);


  app.get("/", (req, res) => {
    res.send('Server is running.')
  })

  io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
      socket.broadcast.emit("callEnded");
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
      io.to(userToCall).emit("callUser", { signal: signalData, from, name})
    });

    socket.on("answerCall", (data) => {
      io.to(data.toString()).emit("callAccepted", data.signal)
    });
  })

  // chat socket connection

  
  const PORT = 8000;

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

