import   {Request,Response }  from 'express';
import { DepartmentInstance } from '../model/department';
 import { SchoolInstance } from '../model/school';
import {	StatusCodes} from 'http-status-codes';


const routepath = "/api/v1";

 


class DepartmentController {


 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getDepartment(req:Request, res:Response){
    try {
       
    const records = await DepartmentInstance.findAll({include:[{model: SchoolInstance}]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Department Info', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/department'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addDepartment (req:Request, res:Response){
    try {
      let { departments_name } = req.body;
      const checkrecord = await DepartmentInstance.findAll({where: {departments_name : departments_name}});
     //console.log(checkrecord);
     if (checkrecord.length > 0 ){
        return res.json({ msg: `Department name ${departments_name} already exists`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/department'})
    }
    const record = await DepartmentInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added Department', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Department', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/department'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getDepartmentbyId (req:Request, res:Response) {
    try {
     const departments_id =  req.params.id; 
     const record = await DepartmentInstance.findOne({where: { departments_id }, include:[{model: SchoolInstance}]} ); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${departments_id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/department/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Department', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/department/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateDepartment (req:Request, res:Response) {
    try {
     const departments_id =  req.params.id; 
     const record = await DepartmentInstance.findOne({where: { departments_id } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${departments_id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/department/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Department', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/department/:id'}).status(StatusCodes.NOT_FOUND);
}
};

} 

export default new DepartmentController();