import express from 'express';
import cors from "cors";
import { routesInit } from './routes/config_route';
const app = express();
import '../db/mongoConect';
app.use(cors());

app.use(express.json());

routesInit(app);

app.listen(3001, () => console.log('is on port 800'));