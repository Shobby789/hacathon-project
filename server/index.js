const express = require("express");
const cors = require("cors");
const { DbConnection } = require("./model/connection");
const app = express();

app.use(express.json());
app.use(cors());

DbConnection();

app.use("/api", require("./routes/userRouter"));
app.use("/api", require("./routes/projectRouter"));

app.listen(1000, () => {
  console.log("Server running");
});
