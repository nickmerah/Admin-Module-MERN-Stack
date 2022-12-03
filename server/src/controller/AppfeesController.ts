import   {Request,Response }  from 'express';
import { AppFeesInstance } from '../model/appfees';
import {	StatusCodes} from 'http-status-codes';
import Constants from '../lib/constants';
import { FeesInstance } from '../model/fees';
import { ProgrammeInstance } from '../model/programme';
 
 

class AppFeesController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${Constants.routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${Constants.routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getAppFees(req:Request, res:Response){
    try {
       
    const records = await AppFeesInstance.findAll({include:[{model: FeesInstance},{model: ProgrammeInstance} ]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching AppFees', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appFees'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addAppFees (req:Request, res:Response){
    try {
    const record = await AppFeesInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added a Fee Amount', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Fee Amount', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appFees'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getAppFeesbyId (req:Request, res:Response) {
    try {
     const fee_id   =  req.params.id; 
     const record = await AppFeesInstance.findOne({where: { fee_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${fee_id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/appFees/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching AppFees', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appFees/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateAppFees (req:Request, res:Response) {
    try {
     const fee_id   =  req.params.id; 
     const record = await AppFeesInstance.findOne({where: { fee_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${fee_id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/appFees/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching AppFees', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appFees/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async getFeeFields(req:Request, res:Response){
    try {
       
    const records = await FeesInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Fields', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appfeefields'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

 
} 

export default new AppFeesController();