import express   from 'express';
import DepartmentValidator from '../validator/departmentValidator';
import Middleware from '../middleware/index';
import DepartmentController from '../controller/DepartmentController';

const Departmentrouter = express.Router();

Departmentrouter.get('/', DepartmentController.notfound404);

Departmentrouter.get('/department',  DepartmentController.getDepartment ).post('/department',   DepartmentValidator.checkInput(),  Middleware.handleValidationError, DepartmentController.addDepartment );
Departmentrouter.get('/department/:id',   DepartmentValidator.checkIdParam(), Middleware.handleValidationError, DepartmentController.getDepartmentbyId ).put('/department/:id',   DepartmentValidator.checkInput(), Middleware.handleValidationError, DepartmentController.updateDepartment );


export default Departmentrouter;