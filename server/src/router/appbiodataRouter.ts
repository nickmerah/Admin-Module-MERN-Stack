import express   from 'express';
import AppbiodataValidator from '../validator/appbiodataValidator';
import Middleware from '../middleware/index';
import AppBiodataController from '../controller/AppBiodataController';

const Appbiodatarouter = express.Router();

Appbiodatarouter.get('/', AppBiodataController.notfound404);

Appbiodatarouter.get('/appbiodata',  AppBiodataController.getAppbiodata );
Appbiodatarouter.get('/appbiodata/:id',   AppbiodataValidator.checkIdParam(), Middleware.handleValidationError, AppBiodataController.getAppbiodatabyId )
.put('/appbiodata/:id',  AppBiodataController.updateAppbiodata )
.patch('/appbiodata/:id',  AppBiodataController.updateAppbiodata );


export default Appbiodatarouter;