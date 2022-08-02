import {Router} from "express"
import Login from "./Login";

const routes : Router[] = [
    Login
]

export default function getRouter() {
    return Router({ mergeParams: true }).use(routes);
}

