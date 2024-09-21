import {Router} from "express"
import { ArticleController } from "../controllers/article.controller";

const routerArticle = Router();
const articleController = new ArticleController();

routerArticle.get("/:id", articleController.edit)
routerArticle.post("/libelle", articleController.editByLibelle)
routerArticle.get("/", articleController.show)
routerArticle.post("/", articleController.store)
//routerArticle.put("/:id",  articleController.update)
//routerArticle.delete("/:id", articleController.remove)

export default routerArticle;