const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.listen(1111, () => console.log("Server is listenin on 1111"));
