import "express-async-errors";
import moduleAlias from "module-alias";
import http from "http";
import { createHttpTerminator } from "http-terminator";

import "./config";
import "./app.process";
import App from "./app";

const sourcePath = __dirname;

const moduleAliasPath = {
  "@common": `${sourcePath}/common`,
  "@exception": `${sourcePath}/exception`,
  "@module": `${sourcePath}/module`,
  "@route": `${sourcePath}/route`,
};

moduleAlias.addAliases(moduleAliasPath);

export const server = http.createServer(new App().getServer());
export const httpTerminator = createHttpTerminator({ server });

(async () => new App().serverListen())();
