

import { Router } from "express";
import { deleteIngles, getAllIngles, getOneIngles, postIngles, updateIngles } from "../controllers/ingles.controller.js";

const router = Router()

router.get('/ingles', getAllIngles)
router.post('/ingles', postIngles)
router.get('/ingles/:id', getOneIngles)
router.delete('/ingles/:id', deleteIngles)
router.put('/ingles/:id', updateIngles)

export default router