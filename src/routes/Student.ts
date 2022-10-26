import {Router} from 'express';
import StudentController from '../controllers/StudentController';

const router = Router();

router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.getById);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.delete);

export default router;