import {Model, DataTypes, ForeignKey} from 'sequelize';
import db from '../config/database.config';
 import { SchoolInstance } from '../model/school';
interface DepartmentAttributes{
    departments_id : number;
    departments_name: string;
    fac_id:number
    departments_code: string; 
   
}

export class DepartmentInstance extends Model <DepartmentAttributes> implements DepartmentAttributes{

    departments_id!: number;
    departments_name!: string;
    fac_id!: ForeignKey<number>;
    departments_code!: string;
 
};

DepartmentInstance.init({
     departments_id  : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    departments_name: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    
    fac_id: {
        type: DataTypes.NUMBER,
         allowNull: false,
         references: {
        model: 'SchoolInstance',
        key: 'faculties_id'
      }
        
    } , 
    departments_code: {
         type: DataTypes.STRING,
          allowNull: false,
    }
}, {
    sequelize:db,
    modelName: 'departments'
});
  
DepartmentInstance.belongsTo(  SchoolInstance, {foreignKey:'fac_id'  });