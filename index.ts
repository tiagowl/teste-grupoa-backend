import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import getRouters from './src/routes';

const routers = getRouters();

app.use(routers);
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor rodando.")
})