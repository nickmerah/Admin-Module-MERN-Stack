import {body,   param} from 'express-validator';

class DepartmentValidator {

   checkInput(){
        return [     
             body("departments_name").notEmpty().withMessage("You must fill a Department Name"),
             body("fac_id").notEmpty().withMessage("Faculty ID cannot be empty"),
             body("departments_code").notEmpty().withMessage("You must fill a Department Code")  ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new DepartmentValidator();