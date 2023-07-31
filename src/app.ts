import express from "express";
import cors from "cors";

import appConfig from "./config";
import { appDefaultRoute, appModuleRoute } from "@route/app.route";
import appException from "@exception/app.exception";

class App {
  private serverPort = Number(appConfig.server.port);
  private app: express.Application;

  constructor() {
    this.app = express();

    this.initAppMiddlewares();
    this.initAppRoutes();
    this.initAppException();
  }

  public getServer() {
    return this.app;
  }

  public serverListen() {
    return this.getServer().listen(this.serverPort, () => {
      console.log(`App listening port : ${this.serverPort}`);
      console.log(`App listening environment : ${process.env.ENV_NAME}`);
    });
  }

  private initAppMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initAppRoutes() {
    appModuleRoute(this.app);
    appDefaultRoute(this.app);
  }

  private initAppException() {
    appException(this.app);
  }
}

export default App;
