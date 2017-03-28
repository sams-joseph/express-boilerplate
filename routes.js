import express from 'express';

// Controller imports
import indexController from './controllers/indexController';


const routes = express();

// Basic routes
routes.get('/', indexController.get);


export default routes;
