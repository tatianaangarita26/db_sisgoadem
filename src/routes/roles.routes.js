import { Router } from "express";
import { getRoles, getRol,  createRoles, updateRol,  deleteRol } from "../controllers/roles.controller.js";

const router = Router()

router.get('/roles', getRoles)
router.get('/roles/:id', getRol)
router.post('/roles', createRoles)
router.patch('/roles/:id_rol', updateRol)
router.delete('/roles/:id',deleteRol)


export default router