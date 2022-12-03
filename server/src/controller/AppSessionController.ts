import   {Request,Response }  from 'express';
import { AppSessionInstance } from '../model/appsession';
import {	StatusCodes} from 'http-status-codes';
import { ProgrammeInstance } from '../model/programme';


   const routepath = "/api/v1";

class InstitutionController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getAppSession(req:Request, res:Response){
    try {
       
    const records = await AppSessionInstance.findAll({include:[ {model: ProgrammeInstance} ]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching application session', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appsession'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async updateAppSession (req:Request, res:Response) {
    try {
     const id =  req.params.id; 
     const record = await AppSessionInstance.findOne({where: { id } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${id}`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appsession/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching application session', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appsession/:id'}).status(StatusCodes.NOT_FOUND);
}
};



}

export default new InstitutionController();