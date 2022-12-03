import  {Request,Response,NextFunction }  from 'express';
import {validationResult} from 'express-validator';
import {	StatusCodes} from 'http-status-codes';

class Middleware {
    handleValidationError(req:Request, res:Response, next: NextFunction) {
    const verror = validationResult(req);
    if (!verror.isEmpty()){
        return res.json(verror.array()[0]).status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
next();

    }
}

export default new Middleware();