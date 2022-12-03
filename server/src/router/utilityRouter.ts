import express   from 'express';
 
import UtilityController from '../controller/UtilityController';

const Utilityrouter = express.Router();

Utilityrouter.get('/', UtilityController.notfound404)
            .get('/states',  UtilityController.getStates)
            .get('/lga',  UtilityController.getLga)
            .get('/alltrans',  UtilityController.getAllTrans)
            .get('/allamtpaid',  UtilityController.getAmtPaid)
            .get('/allapplicants',  UtilityController.getAllApplicants)
            .get('/submittedapplicants',  UtilityController.getSubmittedApplicants)
            .get('/alltransactions',  UtilityController.getPaidTransactions)

 

export default Utilityrouter;