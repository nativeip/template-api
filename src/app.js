import "dotenv/config";

import express from "express";
import cors from "cors";
import "express-async-errors";

import "./database";

class App {
  constructor() {
    this.app = express();

    this.midllewares();
    this.routes();
    this.exceptionHandler();
  }

  midllewares() {
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use((req, res, next) => {
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

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development") {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: "Internal server error." });
    });
  }
}

export default new App().server;
