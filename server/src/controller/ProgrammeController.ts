import   {Request,Response }  from 'express';
import { ProgrammeInstance } from '../model/programme';
import {	StatusCodes} from 'http-status-codes';


const routepath = "/api/v1";
 

class ProgrammeController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getProgramme(req:Request, res:Response){
    try {
       
    const records = await ProgrammeInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Programme Info', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/programme'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addProgramme (req:Request, res:Response){
    try {
    const record = await ProgrammeInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added Programme', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Programme', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/programme'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getProgrammebyId (req:Request, res:Response) {
    try {
     const programme_id  =  req.params.id; 
     const record = await ProgrammeInstance.findOne({where: { programme_id  } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${programme_id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/programme/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Programme', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/programme/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateProgramme (req:Request, res:Response) {
    try {
     const programme_id  =  req.params.id; 
     const record = await ProgrammeInstance.findOne({where: { programme_id  } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${programme_id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/programme/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Programme', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/programme/:id'}).status(StatusCodes.NOT_FOUND);
}
};

} 

export default new ProgrammeController();