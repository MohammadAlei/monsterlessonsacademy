import express from "express";
import bodyParser from "body-parser";
import { connect } from "./db";
import * as artistsController from "./controllers/artists";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/artists", artistsController.all);

app.get("/artists/:id", artistsController.findById);

app.post("/artists", artistsController.create);

app.put("/artists/:id", artistsController.update);

app.delete("/artists/:id", artistsController.deleteById);

const startServer = async () => {
  await connect("mongodb://localhost:27017/api", "api");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();