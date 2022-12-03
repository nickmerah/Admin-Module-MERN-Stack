import express   from 'express';
import UserValidator from '../validator/userValidator';
import Middleware from '../middleware/index';
import UserController from '../controller/UserController';

const Userrouter = express.Router();

Userrouter.get('/', UserController.notfound404);

Userrouter.get('/user',  UserController.getUser )
.post('/user',   UserValidator.checkInput(),  Middleware.handleValidationError, UserController.addUser );
Userrouter.get('/user/:id',   UserValidator.checkIdParam(), Middleware.handleValidationError, UserController.getUserbyId )
.put('/user/:id',   UserValidator.checkInput(), Middleware.handleValidationError, UserController.updateUser )
.patch('/user/:id',  UserController.updateUser ).get('/usergroups', UserController.getUserGroup);


export default Userrouter;