import   {Request,Response }  from 'express';
import { UserInstance } from '../model/users';
import {	StatusCodes} from 'http-status-codes';
 import { GroupInstance } from '../model/groups';


const routepath = "/api/v1";
 

class UserController {

 

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getUser(req:Request, res:Response){
    try {
       
    const records = await UserInstance.findAll({include:[{model: GroupInstance}]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching User', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/user'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 async addUser (req:Request, res:Response){
    try {
    const record = await UserInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added a User', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Course of Study', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/user'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getUserbyId (req:Request, res:Response) {
    try {
     const id   =  req.params.id; 
     const record = await UserInstance.findOne({where: { id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/user/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching User', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/user/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateUser (req:Request, res:Response) {
    try {
     const id   =  req.params.id; 
     const record = await UserInstance.findOne({where: { id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${id}`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/user/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching User', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/user/:id'}).status(StatusCodes.NOT_FOUND);
}
};

 
async getUserGroup(req:Request, res:Response){
    try {
       
    const records = await GroupInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching User Group', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/usergroups'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};
} 

export default new UserController();