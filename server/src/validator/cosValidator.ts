import {body,   param} from 'express-validator';

class CosValidator {

   checkInput(){
        return [     
             body("dept_id").notEmpty().withMessage("Department ID cannot be empty"),
             body("programme_option").notEmpty().withMessage("Course of Study name cannot be empty"),
             body("duration").notEmpty().withMessage("You must fill a Duration"),
             body("prog_id").notEmpty().withMessage("You must fill a Programme ID"),
             //body("deptcode").notEmpty().withMessage("You must fill a Department Code"),
            // body("dept_code").notEmpty().withMessage("You must fill a Department Code"),
             body("d_status").notEmpty().withMessage("You must fill a Status for the course of study")  
            
            
            ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new CosValidator();