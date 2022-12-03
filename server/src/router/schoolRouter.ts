import express   from 'express';
import SchoolValidator from '../validator/schoolValidator';
import Middleware from '../middleware/index';
import SchoolController from '../controller/SchoolController';

const Schoolrouter = express.Router();

Schoolrouter.get('/', SchoolController.notfound404);

Schoolrouter.get('/school',  SchoolController.getSchool ).post('/school',   SchoolValidator.checkInput(),  Middleware.handleValidationError, SchoolController.addSchool );
Schoolrouter.get('/school/:id',   SchoolValidator.checkIdParam(), Middleware.handleValidationError, SchoolController.getSchoolbyId )
.put('/school/:id',   SchoolValidator.checkInput(), Middleware.handleValidationError, SchoolController.updateSchool );


export default Schoolrouter;