import { Router } from "express";
import { methods as UsuarioController } from "./../controllers/Usuario.controller";

const router = Router();

router.get("/", UsuarioController.getUsuarios);
router.get("/:usuario", UsuarioController.loguin);
router.post("/", UsuarioController.addUsuario);
router.put("/:id", UsuarioController.updateUsuario);
router.delete("/:id", UsuarioController.deleteUsuario);

export default router;
