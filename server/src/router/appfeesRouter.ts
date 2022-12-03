import express   from 'express';
import AppFeesValidator from '../validator/appFeesValidator';
import Middleware from '../middleware/index';
import AppfeesController from '../controller/AppfeesController';

const AppFeesrouter = express.Router();

AppFeesrouter.get('/', AppfeesController.notfound404);

AppFeesrouter.get('/appFees',  AppfeesController.getAppFees )
.post('/appFees',   AppFeesValidator.checkInput(),  Middleware.handleValidationError, AppfeesController.addAppFees );
AppFeesrouter.get('/appFees/:id',   AppFeesValidator.checkIdParam(), Middleware.handleValidationError, AppfeesController.getAppFeesbyId )
.put('/appFees/:id',   AppFeesValidator.checkInput(), Middleware.handleValidationError, AppfeesController.updateAppFees )
.patch('/appFees/:id',  AppfeesController.updateAppFees ).get('/appfeefields', AppfeesController.getFeeFields);


export default AppFeesrouter;