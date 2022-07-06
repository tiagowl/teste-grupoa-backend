import {Router} from 'express';

const routers: Router[] = [

];

export default function getRouters(){
    return Router({mergeParams: true}).use(routers)
}