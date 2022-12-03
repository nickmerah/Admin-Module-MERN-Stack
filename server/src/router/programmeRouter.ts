import express   from 'express';
import ProgrammeValidator from '../validator/programmeValidator';
import Middleware from '../middleware/index';
import ProgrammeController from '../controller/ProgrammeController';

const Programmerouter = express.Router();

Programmerouter.get('/', ProgrammeController.notfound404);

Programmerouter.get('/programme',  ProgrammeController.getProgramme ).post('/programme',   ProgrammeValidator.checkInput(),  Middleware.handleValidationError, ProgrammeController.addProgramme );
Programmerouter.get('/programme/:id',   ProgrammeValidator.checkIdParam(), Middleware.handleValidationError, ProgrammeController.getProgrammebyId ).put('/programme/:id',   ProgrammeValidator.checkInput(), Middleware.handleValidationError, ProgrammeController.updateProgramme );


export default Programmerouter;