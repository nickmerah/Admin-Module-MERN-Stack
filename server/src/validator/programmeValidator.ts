import {body,   param} from 'express-validator';

class ProgrammeValidator {

   checkInput(){
        return [     
             body("programme_name").notEmpty().withMessage("You must fill a Programme Name"),
             body("aprogramme_name").notEmpty().withMessage("You must fill a Programme Code")  ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new ProgrammeValidator();