const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { apk } = require("./config/environment");
const socket = require("./socket");
const connect = require("./database/Connection");
const routes = require("./routes");

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(cors());
connect();

app.use(routes);

const server = httpServer.listen(apk.port, () =>
  console.log(`Server is running on http://localhost:${apk.port}`)
);
socket(server);
