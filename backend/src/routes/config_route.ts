import { Application } from 'express';
import courseR from './coures';
import userR from './user';

export const routesInit = (app: Application): void => {
    app.use('/course', courseR);
    app.use('/user', userR);
};

