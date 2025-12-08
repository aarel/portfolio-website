import { Router } from 'express';
import data from '../data/projects.json'

const router = Router();
router.get("/", (_, res) => res.json(data));
export default router;