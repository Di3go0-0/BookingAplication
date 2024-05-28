import { Router } from "express";
import { comprobateToken } from "../controllers/token.controllers.js";

const router = Router();

router.post("/", comprobateToken);


export default router;
