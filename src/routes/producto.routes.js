import { Router } from "express";
import { getProductos, getProducto,  createProductos, updateProducto,  deleteProducto } from "../controllers/producto.controller.js";

const router = Router()

router.get('/producto', getProductos)
router.get('/producto/:id', getProducto)
router.post('/producto', createProductos)
router.put('/producto/:id', updateProducto)
router.delete('/producto/:id',deleteProducto)


export default router