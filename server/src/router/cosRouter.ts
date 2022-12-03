import express   from 'express';
import CosValidator from '../validator/cosValidator';
import Middleware from '../middleware/index';
import CosController from '../controller/CosController';

const Cosrouter = express.Router();

Cosrouter.get('/', CosController.notfound404);

Cosrouter.get('/cos',  CosController.getCos )
.post('/cos',   CosValidator.checkInput(),  Middleware.handleValidationError, CosController.addCos );
Cosrouter.get('/cos/:id',   CosValidator.checkIdParam(), Middleware.handleValidationError, CosController.getCosbyId )
.put('/cos/:id',   CosValidator.checkInput(), Middleware.handleValidationError, CosController.updateCos )
.patch('/cos/:id',  CosController.updateCos );


export default Cosrouter;