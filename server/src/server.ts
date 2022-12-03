
import express, {Request,Response }  from 'express';
import 'dotenv/config';
import {StatusCodes} from 'http-status-codes';
import rootRouter  from '../src/router/index';
import cors from 'cors';
/***testing
 * 
 *
 
import { SchoolInstance } from './model/school';
import { DepartmentInstance } from './model/department';
 
 emd testing
 * 
 *
 */

 /***testing
 * 
 *
 
    app.get('/testing', async (req:Request, res: Response) => {
     
    const records = await DepartmentInstance.findAll({include:[{model: SchoolInstance}]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
 
     
} );
    
 endtesting* 
 *
 */
const app = express();

const allowedOrigins = ['http://localhost:5000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json()); 

app.get('/', (req:Request, res: Response) => {
        return res.status(StatusCodes.OK).send({ message: `Welcome to the Northwest Admin API!. Endpoints available at ${process.env.BASE_URL}:${port}/api/v1/routename` })
    });



app.use('/api/v1', rootRouter);

const port = process.env.SERVER_PORT || '';

const start = async () => {
try {
  app.listen(port, () => {
    console.log(`Server running on ${process.env.BASE_URL}:${port}`);
        });
    } catch (error: any) {
         console.log(`Error occurred: ${error.message}`)
}
}

start();
 
 