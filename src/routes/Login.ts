import {Router} from 'express';
import LoginController from '../controllers/LoginController';

Router().post("/signUp", LoginController.index);

export default Router;