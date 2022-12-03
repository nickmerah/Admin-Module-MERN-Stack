import {body,   param} from 'express-validator';

class UserValidator {

   checkInput(){
        return [     
             body("ad_username").notEmpty().withMessage("Username cannot be empty"),
             body("ad_password").notEmpty().withMessage("Password cannot be empty"),
             body("ad_title").notEmpty().withMessage("You must fill a Title"),
             body("ad_surname").notEmpty().withMessage("You must fill a Surname"),
             body("ad_firstname").notEmpty().withMessage("You must fill a Firstname"),
             body("ad_othernames").optional(true),
             body("ad_email").notEmpty().withMessage("You must fill an Email").isEmail().withMessage("Email must be valid") ,
             body("ad_status").notEmpty().withMessage("You must fill a Status for the User").isInt()
    .withMessage("Status must be a Number"),
             body("ad_group").notEmpty().withMessage("You must fill a Group for the User") .isInt()
    .withMessage("Group must be a Number")
            
            
            ]
    };

   checkIdParam(){
        return [param('id').notEmpty().withMessage("The ID must not be empty").isInt()
    .withMessage("Id must be a Number")];
    };
   
}

export default new UserValidator();