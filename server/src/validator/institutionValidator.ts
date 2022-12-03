import {body,   param} from 'express-validator';

class InstitutionValidator {

   checkInput(){
        return [     
            body("schoolname").notEmpty().withMessage("You must fill a School Name"),
            body("schoolabvname").notEmpty().withMessage("You must fill a School Abbreviation Name"),
        body("schooladdress").notEmpty().withMessage("You must fill a School Address"),
        body("schoolemail").notEmpty().withMessage("You must fill a School Email"),
        body("endreg_date").notEmpty().withMessage("You must fill the registration end date"),
        body("appendreg_date").notEmpty().withMessage("You must fill the application end date"),
        body("appmarkuee").notEmpty().withMessage("You must fill an application Marquee"),
         ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new InstitutionValidator();