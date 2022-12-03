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
        body("nhendreg_date").notEmpty().withMessage("You must fill the portal end date"),
        body("markuee").notEmpty().withMessage("You must fill a Marquee"),
        body("appmarkuee").notEmpty().withMessage("You must fill an application Marquee"),
        body("appstartdate").notEmpty().withMessage("You must fill an application start date"),
        body("appenddate").notEmpty().withMessage("You must fill an application end date"), 
        body("appclosing").notEmpty().withMessage("You must fill the portal closing date"), ]
    };

   checkIdParam(){
        return [param('skid').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new InstitutionValidator();