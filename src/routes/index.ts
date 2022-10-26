import {Router} from "express"
import Login from "./Login";
import Student from './Student';

const routes : Router[] = [
    Login,
    Student
]

export default function getRouter() {
    return Router({ mergeParams: true }).use(routes);
}

