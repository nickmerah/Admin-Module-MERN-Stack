import { Router } from 'express';
import  Institutionrouter   from '../router/institutionRouter';
import  Schoolrouter   from '../router/schoolRouter';
import  Departmentrouter   from '../router/departmentRouter';
import  Programmerouter   from '../router/programmeRouter';
import  Cosrouter   from '../router/cosRouter';
import  Userrouter   from '../router/userRouter';
import  Appfeesrouter   from '../router/appfeesRouter';
import  Appsessionrouter   from '../router/appsessionRouter';
import  AppbiodataRouter   from '../router/appbiodataRouter';
import Utilityrouter from '../router/utilityRouter';

let rootRouter = Router();

rootRouter.use('/', Institutionrouter, 
                    Schoolrouter, 
                    Departmentrouter, 
                    Programmerouter,
                    Cosrouter, 
                    Userrouter, 
                    Appfeesrouter,
                    Appsessionrouter,
                    AppbiodataRouter,
                    Utilityrouter
                    );

export default rootRouter;

 