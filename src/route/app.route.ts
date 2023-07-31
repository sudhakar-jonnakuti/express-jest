import { Application, NextFunction, Request, Response } from "express";

import HealthCheckRoute from "../module/health/health.route";
import { NotFound } from "../exception/response/client.exception";

export const appModuleRoute = (app: Application) => {
  const moduleRoute = () => [new HealthCheckRoute()];

  moduleRoute().forEach((appRoute) => {
    app.use("/api", appRoute.router);
  });
};

export const appDefaultRoute = (app: Application) => {
  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    throw new NotFound();
  });
};
