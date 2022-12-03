import   {Request,Response }  from 'express';
import { CosInstance } from '../model/cos';
 import { DepartmentInstance } from '../model/department';
import { ProgrammeInstance } from '../model/programme';
import {	StatusCodes} from 'http-status-codes';


const routepath = "/api/v1";
 

class CosController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getCos(req:Request, res:Response){
    try {
       
    const records = await CosInstance.findAll({include:[{model: DepartmentInstance},{model: ProgrammeInstance} ]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Course of Study', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/cos'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addCos (req:Request, res:Response){
    try {
    const record = await CosInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added Course of Study', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Course of Study', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/cos'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getCosbyId (req:Request, res:Response) {
    try {
     const do_id   =  req.params.id; 
     const record = await CosInstance.findOne({where: { do_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${do_id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/cos/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Course of Study', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/cos/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateCos (req:Request, res:Response) {
    try {
     const do_id   =  req.params.id; 
     const record = await CosInstance.findOne({where: { do_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${do_id  }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/cos/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Course of Study', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/cos/:id'}).status(StatusCodes.NOT_FOUND);
}
};

 


} 

export default new CosController();