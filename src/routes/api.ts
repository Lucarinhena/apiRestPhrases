import { Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);
router.get("/random", ApiController.random);
router.get("/nome/:nome", ApiController.name);

router.post("/frases", ApiController.createPhrase);
router.get("/frases", ApiController.listPhrases);
router.get ('/frase/aleatoria', ApiController.randomPhrase)
router.get ('/frases/:id', ApiController.getPhrase)
router.put ('/frase/:id', ApiController.editPhrase )
router.delete ('/frase/:id', ApiController.deletePhrase)

export default router;
