import {body,   param} from 'express-validator';

class UserValidator {

   checkInput(){
        return [     
            
             body("jambno").optional(true),
             body("surname").notEmpty().withMessage("You must fill a surname"),
             body("firstname").notEmpty().withMessage("You must fill a firstname"),
             body("othernames").optional(true),
             body("gender").notEmpty().withMessage("You must select a gender") ,
             body("marital_status").notEmpty().withMessage("You must select a marital_status"),
             body("birthdate").notEmpty().withMessage("You must select a birthdate").isDate()
    .withMessage("birthdate must be a valid date"),
             body("local_gov").notEmpty().withMessage("You must select a local gov").isInt()
    .withMessage("local gov must be a Number"),
             body("state_of_origin").notEmpty().withMessage("You must select a state of origin").isInt()
    .withMessage("state of origin must be a Number"),
             body("contact_address").notEmpty().withMessage("You must fill a contact address"),
             body("student_email").notEmpty().withMessage("You must fill an email").isEmail().withMessage("Email must be valid"),
             body("student_homeaddress").notEmpty().withMessage("You must fill an student homeaddress"),
             body("student_mobiletel").notEmpty().withMessage("You must fill a phone no"),
             body("next_of_kin").notEmpty().withMessage("You must fill next of kin name"),
             body("nok_address").notEmpty().withMessage("You must fill next of kin address"),
             body("nok_email").notEmpty().withMessage("You must fill next of kin email").isEmail().withMessage("Email must be valid"),
             body("nok_tel").notEmpty().withMessage("You must fill next of kin name phone no"),
             body("stdprogramme_id").notEmpty().withMessage("You must  select a programme").isInt()
    .withMessage("programme id must be a Number"),
             body("stdcourse").notEmpty().withMessage("You must select a  course").isInt()
    .withMessage("course must be a Number"),
             body("std_programmetype").notEmpty().withMessage("You must select a programme type").isInt()
    .withMessage("programme type must be a Number"),
             body("std_photo").optional(true),
             body("adm_status").optional(true)
            ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new UserValidator();