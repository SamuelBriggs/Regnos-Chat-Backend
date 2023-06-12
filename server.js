const express = require('express')
const app = express()
const dbConfig = require("./dbConfig");
const port = 5001
app.use(express.json())
const userRoute = require("./routes/userRoutes")
app.use("/api/users", userRoute);
app.listen(port, () => console.log("Server running") )