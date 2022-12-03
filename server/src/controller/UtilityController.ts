import   {Request,Response }  from 'express';
import { StateInstance } from '../model/sor';
import { LgaInstance } from '../model/lga';
import { TransactionInstance } from '../model/transactions';
import {	StatusCodes} from 'http-status-codes';
import { Sequelize } from 'sequelize';
 import {AppBiodataInstance} from '../model/appbiodata';
  import {ProgrammeInstance} from '../model/programme';

const routepath = "/api/v1";
 

class UtilityController {


async notfound404(req:Request, res:Response)  {

     return res.json({ msg: `Route does not Exist, Route must have a name, e.g ${routepath}/routename`, status: StatusCodes.INTERNAL_SERVER_ERROR ,route: `${routepath}/routename`}).status(StatusCodes.NOT_FOUND);
 
};

async getStates(req:Request, res:Response){
    try {
       
    const records = await StateInstance.findAll({where: {}}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching States', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/sor'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

 async getLga(req:Request, res:Response){
    try {
       
    const records = await LgaInstance.findAll({include:[{model: StateInstance}]}); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Lga', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/lga'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};


async getAllTrans(req:Request, res:Response){
    try {
       
    const records = await TransactionInstance.findAll({where: { trans_custom1:'Paid'   } }); 
    return res.json({records,  status: StatusCodes.OK, count: records.length}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Transactions', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/getalltrans'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

async getAmtPaid(req:Request, res:Response){
    try {
       
    const records = await TransactionInstance.findAll({where: { trans_custom1:'Paid'   }, 
    attributes:[[Sequelize.fn('sum', Sequelize.col('fee_amount')), 'totalamt']],
   // attributes:['fee_amount',[Sequelize.fn('sum', Sequelize.col('fee_amount')), 'total']],
    //group : ['trans_no'],
   // order: Sequelize.literal('totalamt DESC'),
    //raw: true

}); 
    return res.json({records,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Transactions', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/allamtpaid'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

async getAllApplicants(req:Request, res:Response){
    try {
       
    const records = await AppBiodataInstance.findAll({where: { }, 
    attributes:[[Sequelize.fn('count', Sequelize.col('std_id')), 'totalapplicants']] }); 
    return res.json({records,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Applicants', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/allapplicants'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

async getSubmittedApplicants(req:Request, res:Response){
    try {
       
    const records = await AppBiodataInstance.findAll({where: { std_custome9 : 1}, 
    attributes:[[Sequelize.fn('count', Sequelize.col('std_id')), 'totalapplicants']] }); 
    return res.json({records,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Applicants', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/submittedapplicants'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

async getPaidTransactions(req:Request, res:Response){
    try {
       
    const records = await TransactionInstance.findAll({where: { trans_custom1:'Paid'   }, 
    include:  {model: ProgrammeInstance},
    attributes:['prog_id', [Sequelize.fn('sum',  Sequelize.col('fee_amount')), 'totalamt'], 
    [Sequelize.fn('count',  Sequelize.col('prog_id')), 'totalno']],
    
     group : ['prog_id'],

}); 
    return res.json({records,  status: StatusCodes.OK}).status(StatusCodes.OK);
}catch(e){
     return res.json({ msg: 'Error fetching Transactions', status: StatusCodes.INTERNAL_SERVER_ERROR ,route: '/allamtpaid'}).status(StatusCodes.INTERNAL_SERVER_ERROR);
}
};

} 

export default new UtilityController();