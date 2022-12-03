import {body,   param} from 'express-validator';

class UserValidator {

   checkInput(){
        return [     
             body("item_id").notEmpty().withMessage("Fee Item cannot be empty").isInt()
    .withMessage("Fee Item  must be a Number"),
             body("amount").notEmpty().withMessage("Amount cannot be empty").isInt()
    .withMessage("Amount must be a Number"),
             body("prog_id").notEmpty().withMessage("You must fill a Programme").isInt()
    .withMessage("Programme must be a Number"),
             body("f_p_time").notEmpty().withMessage("You must fill a Programme type").isInt()
    .withMessage("Programme type must be a Number")
            
            
            ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new UserValidator();