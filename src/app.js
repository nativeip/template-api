import "dotenv/config";

import express from "express";
import cors from "cors";
import "express-async-errors";

import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.server = express();

    this.midllewares();
    this.routes();
    this.exceptionHandler();
  }

  midllewares() {
    this.server.use(express.json());
    this.server.use(cors());

    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, GET, POST, DELETE, OPTIONS"
      );
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development") {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: "Internal server error." });
    });
  }
}

export default new App().server;
