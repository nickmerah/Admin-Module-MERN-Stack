import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';

interface InstitutionAttributes{
    skid: number;
    schoolname: string;
    schoolabvname: string;
    schooladdress: string;
    schoolemail: string;
    endreg_date: string;
    appendreg_date: string;
    appmarkuee: string;
  
}

export class InstitutionInstance extends Model <InstitutionAttributes> {}

InstitutionInstance.init({
     skid : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    schoolname: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    schoolabvname: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    schooladdress: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    schoolemail: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    endreg_date: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    appendreg_date: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }, 
    appmarkuee: {
        type: DataTypes.STRING,
         allowNull: false,
        
    } 
    
}, {
    sequelize:db,
    tableName: 'schoolinfo'
});
