import { Router } from "express";
import { dif, soma } from "./matematica";

const routes = Router();

routes.get("/soma", soma );

routes.get("/dif", dif );

export default routes