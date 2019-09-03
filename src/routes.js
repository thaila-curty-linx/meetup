import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import authMiddleware from "./app/middleware/auth";
// import das controllers
import User from "./app/controllers/UserController";
import Session from "./app/controllers/SessionController";
import Files from "./app/controllers/FileController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", User.store);
routes.post("/sessions", Session.store);
routes.use(authMiddleware);
routes.put("/users", User.update);
routes.post("/files", upload.single("file"), Files.store);

export default routes;
