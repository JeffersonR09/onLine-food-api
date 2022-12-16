import { Express } from "express";
import menuRouter from "./Menu/router";
import authRouter from "./auth/router";
import clientRouter from "./client/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/menu", menuRouter);
  app.use("/client", clientRouter);
};

export default router;
