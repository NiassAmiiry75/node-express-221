import {Router} from "express"
import { ClientController } from "../controllers/client.controller";

const routerClient= Router();
const clientController = new ClientController();

routerClient.get("/:id", clientController.edit)
routerClient.post("/telephone", clientController.editByTelephone)
routerClient.get("/", clientController.show)
routerClient.post("/", clientController.store)

export default routerClient;