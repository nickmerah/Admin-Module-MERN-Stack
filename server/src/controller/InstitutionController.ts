import   {Request,Response }  from 'express';
import { InstitutionInstance } from '../model/institution';
import {	StatusCodes} from 'http-status-codes';


   const routepath = "/api/v1";

class InstitutionController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getInstitutionInfo(req:Request, res:Response){
    try {
       
    const records = await InstitutionInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Institution Info', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/institution'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async updateInstitutionInfo (req:Request, res:Response) {
    try {
     const skid =  req.params.id; 
     const record = await InstitutionInstance.findOne({where: { skid } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${skid}`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/institution/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching institution info', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/institution/:id'}).status(StatusCodes.NOT_FOUND);
}
};



}

export default new InstitutionController();