import   {Request,Response }  from 'express';
import { SchoolInstance } from '../model/school';
import {	StatusCodes} from 'http-status-codes';


const routepath = "/api/v1";
 

class SchoolController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getSchool(req:Request, res:Response){
    try {
       
    const records = await SchoolInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching School Info', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/school'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addSchool (req:Request, res:Response){
    try {
     let { faculties_name } = req.body;
     const checkrecord = await SchoolInstance.findAll({where: {faculties_name : faculties_name}});
     //console.log(checkrecord);
     if (checkrecord.length > 0 ){
        return res.json({ msg: `School name ${faculties_name} already exists`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/school'})
    }
    const record = await SchoolInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added School', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding School', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/school'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getSchoolbyId (req:Request, res:Response) {
    try {
     const faculties_id =  req.params.id; 
     const record = await SchoolInstance.findOne({where: { faculties_id } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${faculties_id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/school/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching School', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/school/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateSchool (req:Request, res:Response) {
    try {
     const faculties_id =  req.params.id; 
     const record = await SchoolInstance.findOne({where: { faculties_id } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${faculties_id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/school/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching School', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/school/:id'}).status(StatusCodes.NOT_FOUND);
}
};

} 

export default new SchoolController();