import {Router} from 'express';
import LoginController from '../controllers/LoginController';

const router = Router();

router.post("/signup", LoginController.index);
router.post("/signin", LoginController.login);

export default router;