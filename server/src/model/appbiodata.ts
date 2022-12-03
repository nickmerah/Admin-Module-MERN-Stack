import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 import { CosInstance } from '../model/cos';
 import { LgaInstance } from '../model/lga';
 import { StateInstance } from '../model/sor';
 import { ProgrammeInstance } from '../model/programme';

interface AppBiodataAttributes{
    std_id : number;
    std_logid: number;
     app_no: string;	
    jambno: string;		
    surname	: string;	
    firstname: string;		
    othernames?: string;		
    gender: string;		
    marital_status: string;		
    birthdate: string;		
    local_gov: number;		
    state_of_origin	: number;	
    contact_address	: string;	
    student_email: string;		
    student_homeaddress	: string;	
    student_mobiletel	: string;	
    next_of_kin	: string;	
    nok_address: string;		
    nok_email: string;		
    nok_tel	: string;	
    stdprogramme_id: number;	
    stdcourse: number;	
    std_programmetype: number;	
    std_photo?: string;	
    std_custome9 : number;	
    adm_status: number;     
}

	
	
	
export class AppBiodataInstance extends Model <AppBiodataAttributes> {}

AppBiodataInstance.init({
     std_id  : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    std_logid : {
         type: DataTypes.NUMBER,
          allowNull: false,
    }, 
     
    app_no: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, jambno: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, 
    surname: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    firstname: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    othernames: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, 
    gender: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    marital_status: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    birthdate: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    local_gov: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    state_of_origin: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    contact_address: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    student_email: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    student_homeaddress	: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    student_mobiletel	: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    next_of_kin: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    nok_address: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    nok_email: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    nok_tel: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    stdprogramme_id: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    stdcourse : {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    std_programmetype: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    std_photo: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, 
    std_custome9: {
        type: DataTypes.NUMBER,
         allowNull: true,
        
    } , 
    adm_status: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    } 
}, {
    sequelize:db,
    tableName: 'applicationprofiles'
});

AppBiodataInstance.belongsTo(  StateInstance, {foreignKey:'state_of_origin'  });
AppBiodataInstance.belongsTo(  LgaInstance, {foreignKey:'local_gov'  });
AppBiodataInstance.belongsTo(  CosInstance, {foreignKey:'stdcourse'  });
AppBiodataInstance.belongsTo(  ProgrammeInstance, {foreignKey:'stdprogramme_id'  });

 