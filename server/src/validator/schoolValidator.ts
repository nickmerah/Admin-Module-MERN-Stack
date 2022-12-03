import {body,   param} from 'express-validator';

class SchoolValidator {

   checkInput(){
        return [     
            body("faculties_name").notEmpty().withMessage("You must fill a School Name"),
            body("fcode").notEmpty().withMessage("You must fill a School Code")  ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new SchoolValidator();