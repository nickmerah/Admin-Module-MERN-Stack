import {body,   param} from 'express-validator';

class appSessionValidator {

   checkInput(){
        return [     
            body("cs_session").notEmpty().withMessage("You must enter a Session Name").isInt()
    .withMessage("Session must be a Number"),
           
        body("status").notEmpty().withMessage("You must enter a Status") ]
    };

    
   
}

export default new appSessionValidator();