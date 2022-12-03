import express   from 'express';
import InstitutionValidator from '../validator/institutionValidator';
import Middleware from '../middleware/index';
import InstitutionController from '../controller/InstitutionController';

const Institutionrouter = express.Router();

Institutionrouter.get('/', InstitutionController.notfound404);

Institutionrouter.get('/institution',  InstitutionController.getInstitutionInfo );
Institutionrouter.put('/institution/:id',  InstitutionValidator.checkInput(), Middleware.handleValidationError, InstitutionController.updateInstitutionInfo );

export default Institutionrouter;