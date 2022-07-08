import {Router} from 'express';
import Login from './Login';

const routers: Router[] = [
    Login()
];

export default function getRouters(){
    return Router({mergeParams: true}).use(routers)
}