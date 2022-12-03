import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 import { DepartmentInstance } from '../model/department';
  import { ProgrammeInstance } from '../model/programme';

interface CosAttributes{
    do_id: number;
    dept_id: number;
    programme_option: string;
    duration: number; 
     prog_id: number;
    deptcode: string; 
    dept_code: string; 
    exam_date?: string | undefined; 
    exam_time?: string | undefined; 
    admletter_date?: string | undefined; 
    d_status: number;
   
}

export class CosInstance extends Model <CosAttributes> {}

CosInstance.init({
     do_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    },dept_id : {
        type: DataTypes.NUMBER,
       allowNull: false,
     //   allowNull: false,
    }, 
    programme_option: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    duration: {
         type: DataTypes.NUMBER,
          allowNull: false,
    },   
    prog_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    },   
    deptcode: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    dept_code: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    exam_date: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    exam_time: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    admletter_date: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    d_status: {
         type: DataTypes.NUMBER,
          allowNull: false,
    }
}, {
    sequelize:db,
    tableName: 'dept_options'
});

CosInstance.belongsTo(  DepartmentInstance, {foreignKey:'dept_id'  });
CosInstance.belongsTo(  ProgrammeInstance, {foreignKey:'prog_id'  });