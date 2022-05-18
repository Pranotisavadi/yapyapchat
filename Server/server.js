const express = require("express");
const app = express();
const authRoute = require("./app/routes/auth");

app.use(express.json());

// app.listen("8000", ()=> {
//     console.log("Backend is running")
// })

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

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });