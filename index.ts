import express from 'express';
const app = express();
import cors from 'cors';
import getRouters from './src/routes';

const routers = getRouters();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routers);

app.listen(3000, ()=>{
    console.log("Servidor rodando.");
})