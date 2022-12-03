import express   from 'express';
import AppSessionValidator from '../validator/appSessionValidator';
import Middleware from '../middleware/index';
import AppsessionController from '../controller/AppSessionController';

const AppSessionrouter = express.Router();

AppSessionrouter.get('/', AppsessionController.notfound404);

AppSessionrouter.get('/appsession',  AppsessionController.getAppSession );
AppSessionrouter.patch('/appsession/:id',  AppSessionValidator.checkInput(), Middleware.handleValidationError, AppsessionController.updateAppSession );

export default AppSessionrouter;