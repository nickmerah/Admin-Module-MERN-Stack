import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 
interface SchoolAttributes{
    faculties_id: number;
    faculties_name: string;
    fcode: string; 
}

export class SchoolInstance extends Model <SchoolAttributes> implements SchoolAttributes {
     faculties_id!: number;
    faculties_name!: string;
    fcode!: string;
 
  };
 

SchoolInstance.init({
     faculties_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    faculties_name: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    fcode: {
        type: DataTypes.STRING,
         allowNull: false,
        
    } 
}, {
    sequelize:db,
    tableName: 'faculties'
});

