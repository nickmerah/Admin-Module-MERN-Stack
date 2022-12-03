import   {Request,Response }  from 'express';
import { AppBiodataInstance } from '../model/appbiodata';
import {StatusCodes} from 'http-status-codes';
import Pagination from '../lib/pagination';
import Constants from '../lib/constants';
 import { CosInstance } from '../model/cos';
 import { LgaInstance } from '../model/lga';
 import { StateInstance } from '../model/sor';
import { ProgrammeInstance } from '../model/programme';
  

class AppBiodataController {

async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${Constants.routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${Constants.routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getAppbiodata(req:Request, res:Response){

      const { page, size } = req.query;
      const { limit, offset } = Pagination.getPagination(page, size);
    try {     
    const records = await AppBiodataInstance.findAndCountAll({ include:[{model: StateInstance},{model: LgaInstance},{model: CosInstance},{model: ProgrammeInstance} ], where: {}, limit, offset}); 
    const response = Pagination.getPagingData(records, page, limit);
    return res.json({response,  status: StatusCodes.OK }).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Biodata', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appbiodata'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


 /*async addAppbiodata (req:Request, res:Response){
    try {
    const record = await AppBiodataInstance.create(req.body); 
    return res.json({record, msg: 'Successfully added Biodata', status: StatusCodes.OK}).status(StatusCodes.CREATED);
}catch(e){
     return res.json({ msg: 'Error adding Biodata', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appbiodata'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};*/


async getAppbiodatabyId (req:Request, res:Response) {
    try {
     const std_id   =  req.params.id; 
     const record = await AppBiodataInstance.findOne({where: { std_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${std_id }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/appbiodata/:id'})
    }
    return res.json({record,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Biodata', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appbiodata/:id'}).status(StatusCodes.NOT_FOUND);
}
};

async updateAppbiodata (req:Request, res:Response) {
    try {
     const std_id   =  req.params.id; 
     const record = await AppBiodataInstance.findOne({where: { std_id   } }); 
     if (!record){
        return res.json({ msg: `Cannot find any record with id ${std_id  }`, status: StatusCodes.INTERNAL_SERVER_ERROR , route: '/appbiodata/:id'})
    }
    const updatedrecord = await record.update(req.body)
    return res.json({updatedrecord,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Biodata', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/appbiodata/:id'}).status(StatusCodes.NOT_FOUND);
}
};



}

export default new AppBiodataController();